import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import SignOut from '@I/icon/sign-out.svg';
import useAuth, { useUser } from '@U/hooks/useAuth';
import * as S from './styles';

function Menus({ setMenuIsOpen }) {
  const history = useHistory();
  const { isAuthorized } = useUser();
  const { signIn, signOut } = useAuth();

  const changeUrl = useCallback((route) => {
    history.push(route);
    setMenuIsOpen(false);
  }, [history, setMenuIsOpen]);

  const NaviButton = useCallback((page, url, delay) => (
    <Fade
      bottom
      duration={500}
      delay={delay}
    >
      <S.NaviText
        onClick={() => changeUrl(url)}
      >
        {page}
      </S.NaviText>
    </Fade>
  ), [changeUrl]);

  return (
    <S.StyledMenus>
      { isAuthorized && (
        <S.SignOutButton onClick={signOut}>
          <S.Image src={SignOut} alt="signOut" />
          <p>로그아웃</p>
        </S.SignOutButton>
      )}
      { !isAuthorized && (
        <S.SignOutButton onClick={signIn}>
          {/* TODO: SignIn 이미지로 교체하기 */}
          <S.Image src={SignOut} alt="signIn" style={{ transform: 'scaleX(-1)' }} />
          <p>로그인</p>
        </S.SignOutButton>
      )}
    </S.StyledMenus>
  );
}
export default Menus;

Menus.propTypes = {
  setMenuIsOpen: PropTypes.func.isRequired,
};
