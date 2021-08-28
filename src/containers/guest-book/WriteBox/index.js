import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import AnimatedInput from '@F/animation/text-animation/AnimatedInput';
import { guestBookCollectionRef } from '@U/initializer/firebase';
import useInput from '@U/hooks/useInput';
import SignInGuide from '@F/modal/content/SignInGuide';
import useModal from '@U/hooks/useModal';
import * as S from './styles';

function WriteBox({ user }) {
  const isAuthorized = useMemo(() => !!(user.uid && !user.isLoading), [user]);
  const { modalComponent, setIsModalOpen } = useModal(SignInGuide);

  const username = useInput('', nameConstraint);
  const content = useInput('', contentConstraint);

  const addToFirestore = () => guestBookCollectionRef.add({
    author: user.uid,
    username: username.value.trim(),
    content: content.value.trim(),
    likes: [],
    created_at: firebase.firestore.Timestamp.now(),
  });

  const toastId = React.useRef(0);
  const Submit = () => {
    if (!toast.isActive(toastId.current)) {
      if (username.value.trim() === '') {
        toastId.current = toast('닉네임을 입력해 주세요');
      } else if (content.value.trim() === '') {
        toastId.current = toast('내용을 입력해 주세요');
      } else {
        username.setValue('');
        content.setValue('');
        addToFirestore().then(() => {
          toastId.current = toast('등록되었습니다!');
        });
      }
    }
  };

  const checkAuthority = useCallback((e) => {
    if (!isAuthorized) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  }, [isAuthorized, setIsModalOpen]);

  return (
    <S.StyledWriteBox>
      <S.InputBox placeholder="닉네임" {...username} onMouseDown={checkAuthority} />
      <AnimatedInput passedPlaceholder="내용을 여기에 쓰면 됩니다." content={content} onMouseDown={checkAuthority} />
      {/* <S.TextArea placeholder="내용을 여기에 쓰면 됩니다." {...content} onMouseDown={checkAuthority} /> */}
      <S.Submit onClick={isAuthorized ? Submit : checkAuthority}>등록</S.Submit>

      {modalComponent}
    </S.StyledWriteBox>
  );
}
export default WriteBox;

WriteBox.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
  }).isRequired,
};

function nameConstraint(value) {
  const regex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9_ ㆍ]*$/;
  return value.length <= 20 && regex.test(value);
}

function contentConstraint(value) {
  return value.length <= 200 && value.split('\n').length <= 5;
}
