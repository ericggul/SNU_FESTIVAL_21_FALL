import React, {
  useCallback, useEffect, useState, useMemo,
} from 'react';
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
import { guestBookCollectionRef } from '@U/initializer/firebase';
import firebase from 'firebase/app';
import FilledHeart from '@I/icon/filled-heart.svg';
import EmptyHeart from '@I/icon/empty-heart.svg';
import { toast } from 'react-toastify';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import { useUser } from '@U/hooks/useAuth';
import useMission from '@U/hooks/useMission';
import { useDispatch } from 'react-redux';
import { actions } from '@/redux/mission/state';
import MissionGuide from '@F/modal/content/MissionGuide';
import GuestBookStamp from '@I/icon/stamp/guest-book-stamp.png';
import * as S from './styles';

export function Comment({ user, comments, mission }) {
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);
  const { modalComponent: missionModalComponent, setIsModalOpen: setIsMissionModalOpen } = useModal(MissionGuide, {
    name: '방명록',
    stamp: GuestBookStamp,
  });
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

  // 방명록 미션
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthorized && mission.isLoaded && !mission.guestBook) {
      if (myLikesForComment.length >= 3 && myComments.length >= 1) {
        dispatch(actions.setFirestoreMission(user, 'guestBook', true));
        setIsMissionModalOpen(true);
      }
    }
  }, [myLikesForComment, myComments, mission, user, isAuthorized, setIsMissionModalOpen, dispatch]);

  const deleteComment = useCallback((commentId) => {
    guestBookCollectionRef.doc(commentId)
      .delete()
      .then(() => toast('삭제되었습니다.'));
  }, []);

  const toggleLikeForComment = useCallback((commentId, isLiked) => {
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

  console.log(comments.length);
  return (
    <S.StyledComment>
      {comments.length}
      {comments.map(comment => {
        const isMine = user.uid === comment.author;
        const isLiked = myLikesForComment.includes(comment.id);

        return (
          // TODO: react window
          <S.CommentThread key={comment.id}>
            <S.FirstRow>
              <S.Box>
                <S.ProfileImage src={mascots[comment.created_at.seconds % mascots.length]} />
                <S.Id>{comment.username}</S.Id>
              </S.Box>
              <S.Box>
                { isMine && (
                  <S.Delete onClick={() => deleteComment(comment.id)}>삭제</S.Delete>
                )}
                <S.LikeButton onClick={() => toggleLikeForComment(comment.id, isLiked)}>
                  <S.Image src={isLiked ? FilledHeart : EmptyHeart} alt="like" />
                </S.LikeButton>
              </S.Box>
            </S.FirstRow>
            <S.ContentRow>
              {comment.isBest && <S.BestLabel>BEST</S.BestLabel>}
              {comment.content.split('\n').map((line, index) => (
                <S.Content key={index}>
                  {line}
                  <br />
                </S.Content>
              ))}
            </S.ContentRow>
            <S.LastRow>
              <S.Time>{dayjs.unix(comment.created_at.seconds).format('MM월 DD일 HH:mm')}</S.Time>
              <S.Likes>
                <S.Image src={EmptyHeart} alt="likes" style={{ marginRight: 3 }} />
                <div>{comment.likes.length}</div>
              </S.Likes>
            </S.LastRow>
          </S.CommentThread>
        );
      })}

      {signInModalComponent}
      {missionModalComponent}
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
  mission: PropTypes.shape({
    isLoaded: PropTypes.bool,
    guestBook: PropTypes.bool,
  }).isRequired,
};

const mascots = [
  mascot1, mascot2, mascot3, mascot4, mascot5, mascot10, mascot11, mascot12, mascot13, mascot14,
];

function CommentParent({ user }) {
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

  // mission redux
  const mission = useMission();

  return <Comment comments={[...bestComments, ...normalComments]} user={user} mission={mission} />;
}
export default CommentParent;

// TODO: user 와 공통된 propTypes 분리
CommentParent.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
  }).isRequired,
};
