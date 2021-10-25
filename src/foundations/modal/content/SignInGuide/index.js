import React from 'react';
import PropTypes from 'prop-types';
import Close from '@I/icon/close.svg';
import LogInRio from '@I/icon/log-in-rio.png';
import useAuth from '@U/hooks/useAuth';
import * as S from './styles';

function SignInGuide({ setIsModalOpen }) {
  const { signIn } = useAuth();

  return (
    <S.SignInGuideBox>
      <S.Image src={LogInRio} />
      <S.CloseButton
        onClick={() => setIsModalOpen(false)}
      >
        <S.CloseIcon />
      </S.CloseButton>
      <S.Header>
        로그인을 하고
        {' '}
        <br />
        축제를 즐겨보세요!
      </S.Header>
      <S.Subheader>* 구글 연동한 스누 메일</S.Subheader>
      <S.Subheader>* 카카오톡내 브라우저 불가</S.Subheader>
      <S.Button onClick={signIn}>로그인 하러 가기</S.Button>
    </S.SignInGuideBox>
  );
}
export default SignInGuide;

SignInGuide.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};
