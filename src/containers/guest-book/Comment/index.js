import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import mascot1 from '@I/svg/mascot/1.svg';
import mascot2 from '@I/svg/mascot/2.svg';
import mascot3 from '@I/svg/mascot/3.svg';
import mascot4 from '@I/svg/mascot/4.svg';
import mascot5 from '@I/svg/mascot/5.svg';
import mascot10 from '@I/svg/mascot/10.svg';
import mascot11 from '@I/svg/mascot/11.svg';
import mascot12 from '@I/svg/mascot/12.svg';
import mascot13 from '@I/svg/mascot/13.svg';
import mascot14 from '@I/svg/mascot/14.svg';
import dayjs from 'dayjs';
import { firestore } from '@U/initializer/firebase';
import FilledHeart from '@I/svg/icon/filled-heart.svg';
import EmptyHeart from '@I/svg/icon/empty-heart.svg';
import { shallowEqual, useSelector } from 'react-redux';
import * as S from './styles';

export function Comment({ user, comments }) {
  return (
    <S.StyledComment>
      {comments.map(comment => (
        <S.CommentThread key={comment.id}>
          <S.FirstRow>
            <S.Box>
              <S.ProfileImage src={mascots[comment.created_at.seconds % mascots.length]} />
              <S.Id>{comment.username}</S.Id>
            </S.Box>
            <S.Box>
              <S.Delete>삭제</S.Delete>
              <S.LikeButton>
                <S.Image src={FilledHeart} alt="like" />
              </S.LikeButton>
            </S.Box>
          </S.FirstRow>
          <S.ContentRow>
            <S.BestLabel>BEST</S.BestLabel>
            {comment.content.split('\n').map((line, index) => (
              <S.Content key={index}>
                {line}
                <br />
              </S.Content>
            ))}
          </S.ContentRow>
          <S.LastRow>
            <S.Time>{dayjs.unix(comment.created_at.seconds).format('YYYY.MM.DD HH:mm')}</S.Time>
            <S.Likes>
              <S.Image src={EmptyHeart} alt="likes" style={{ marginRight: 3 }} />
              <div>{comment.likes.length}</div>
            </S.Likes>
          </S.LastRow>
        </S.CommentThread>
      ))}
    </S.StyledComment>
  );
}

Comment.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.shape({
      nanoseconds: PropTypes.number,
      seconds: PropTypes.number, // unix time
    }),
  })).isRequired,
};

const mascots = [
  mascot1, mascot2, mascot3, mascot4, mascot5, mascot10, mascot11, mascot12, mascot13, mascot14,
];

function CommentParent() {
  // user
  const user = useSelector(state => ({
    uid: state.user.uid,
    isLoading: state.user.isLoading,
  }), shallowEqual);

  // comments
  const [comments, setComments] = useState([]);
  const subscribeComments = useCallback(() => firestore.collection('guest-book')
    .orderBy('created_at', 'desc')
    .limit(100)
    .onSnapshot(docs => {
      const firestoreComments = [];
      docs.forEach(doc => (
        firestoreComments.push({
          id: doc.id,
          ...doc.data(),
        })));
      setComments(firestoreComments);
    }), []);
  useEffect(() => {
    const unsubscribe = subscribeComments();
    return () => unsubscribe();
  }, [subscribeComments]);

  return <Comment comments={comments} user={user} />;
}
export default CommentParent;