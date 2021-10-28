import React, {
  useCallback, useEffect, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import NumberIncrement from '@F/animation/text-animation/NumberIncrement';
import FilledHeart from '@I/guest-book/filled-heart.svg';
import EmptyHeart from '@I/guest-book/empty-heart.svg';
import MoonCharacter from '@F/MoonCharacter';
import dayjs from 'dayjs';
import { guestBookCollectionRef } from '@U/initializer/firebase';
import firebase from 'firebase/app';

import { toast } from 'react-toastify';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import { useUser } from '@U/hooks/useAuth';
import * as S from './styles';

export function Comment({
  user, comments, handleHeartClick,
}) {
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);

  const { isAuthorized } = useUser();

  // 내가 좋아하는 방명록 목록
  const [myLikesForComment, setMyLikesForComment] = useState([]);
  useEffect(() => {
    if (isAuthorized) {
      comments.forEach((comment) => {
        if (comment.likes.includes(user.uid)) {
          setMyLikesForComment(state => [...state, comment.id]);
        }
      });
    }
    return () => setMyLikesForComment([]);
  }, [user, isAuthorized, comments]);

  // 내가 쓴 방명록 목록
  const myComments = useMemo(() => (
    comments.filter(comment => comment.author === user.uid)
  ), [comments, user.uid]);

  const deleteComment = useCallback((commentId) => {
    guestBookCollectionRef.doc(commentId)
      .delete()
      .then(() => toast('삭제되었습니다.'));
  }, []);

  const toggleLikeForComment = useCallback((commentId, isLiked) => {
    if (!isLiked) {
      handleHeartClick();
    }
    if (!isAuthorized) {
      setIsSignInModalOpen(true);
      return;
    }

    guestBookCollectionRef.doc(commentId)
      .update({
        likes: isLiked
          ? firebase.firestore.FieldValue.arrayRemove(user.uid)
          : firebase.firestore.FieldValue.arrayUnion(user.uid),
      })
      .then(() => toast(isLiked ? '좋아요를 취소하였습니다.' : '이 방명록 글을 좋아합니다.'));
  }, [user.uid, isAuthorized, setIsSignInModalOpen]);

  const getRandom = (a, b) => Math.random() * (b - a) + a;

  return (
    <S.StyledComment>
      <NumberIncrement number={25} />
      {comments.map((comment, i) => {
        const isMine = user.uid === comment.author;
        const isLiked = myLikesForComment.includes(comment.id);

        return (
        // TODO: react window
          <S.CommentThread key={comment.id} delay={i * 0.1}>
            <MoonCharacter number={comment.created_at.seconds} boxShadow />
            <S.CommentContent>
              <S.FirstRow>
                <S.Box>
                  <S.Id>{comment.username}</S.Id>
                  {comment.isBest && <S.BestLabel>BEST</S.BestLabel>}
                </S.Box>
              </S.FirstRow>
              <S.ContentRow>
                {comment.content.split('\n').map((line, index) => (
                  <S.Content key={index}>
                    {line}
                    <br />
                  </S.Content>
                ))}
              </S.ContentRow>
              <S.LastRow>
                <S.InfoBox>
                  <S.Time>{dayjs.unix(comment.created_at.seconds).format('YYYY.MM.DD')}</S.Time>
                  {
                    comment.likes.length > 0
                    && (
                    <S.Likes>
                      <S.HeartImage1 src={FilledHeart} alt="likes" style={{ marginRight: 3 }} />
                      <S.LikesText>{comment.likes.length}</S.LikesText>
                    </S.Likes>
                    )
                  }
                </S.InfoBox>
                <S.LikeBox>
                  { isMine && (
                  <S.Delete onClick={() => deleteComment(comment.id)}>삭제</S.Delete>
                  )}
                  <S.LikeButton onClick={() => toggleLikeForComment(comment.id, isLiked)}>
                    <S.HeartImage2 src={isLiked ? FilledHeart : EmptyHeart} alt="like" />
                  </S.LikeButton>
                </S.LikeBox>
              </S.LastRow>
            </S.CommentContent>
          </S.CommentThread>
        );
      })}

      {signInModalComponent}
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

function CommentParent({ user, handleHeartClick }) {
  // 방명록 firestore
  const [comments, setComments] = useState([]);
  const [bestComments, setBestComments] = useState([]);

  // Best Comments
  useEffect(() => {
    const newBestComments = comments
      .filter(comment => comment.likes.length > 0)
      .sort((a, b) => b.likes.length - a.likes.length)
      .slice(0, 3);
    newBestComments.forEach(comment => {
      comment.isBest = true;
    });
    setBestComments(newBestComments);
  }, [comments]);

  // Other Comments
  const normalComments = useMemo(() => {
    const bestCommentIds = bestComments.map(comment => comment.id);
    return comments.filter(comment => !bestCommentIds.includes(comment.id));
  }, [comments, bestComments]);

  const subscribeComments = useCallback(() => guestBookCollectionRef
    .orderBy('created_at', 'desc')
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

  return <Comment comments={[...bestComments, ...normalComments]} user={user} handleHeartClick={handleHeartClick} />;
}
export default CommentParent;

// TODO: user 와 공통된 propTypes 분리
CommentParent.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
  }).isRequired,
};
