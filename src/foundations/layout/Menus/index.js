import React, { useCallback, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import MenuDestkop from '@I/layout/menu-desktop.png';
import MenuMobile from '@I/layout/menu-mobile.png';
import SignIn from '@I/icon/sign-in.svg';
import SignOut from '@I/icon/sign-out.svg';
import Stamp from '@I/icon/stamp.svg';
import { withTheme } from 'styled-components';
import useAuth, { useUser } from '@U/hooks/useAuth';
import * as S from './styles';

function Menus({ theme, setMenuIsOpen }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme]);
  const history = useHistory();
  const { isAuthorized } = useUser();
  const { signIn, signOut } = useAuth();
  const [openedTab, setOpenedTab] = useState(null);

  const goToPage = useCallback((route) => {
    history.push(route);
    setMenuIsOpen(false);
  }, [history, setMenuIsOpen]);

  const DATA = [
    {
      header: { name: '공연', link: '/performane' },
      children: [
        { name: '씽스틸러', link: '/sing-staler' },
        { name: '힛더스테이지', link: '/hit-the-stage' },
        { name: '폰서트 LIVE', link: '/phone-cert' },
        { name: '관악게임토너먼트', link: '/game-tournament' }],
    },
    {
      header: { name: '행사', link: '/activity' },
      children: [
        { name: '미니게임', link: '/mini' },
        { name: '단체게임', link: '/group' },
        { name: '공모전', link: '/competition' },
        { name: '토크쇼', link: '/radio' }],
    },
    // {
    //   header: { name: '미니게임', link: '/activity/mini' },
    //   children: [
    //     { name: '필기 맞추기', link: '/handwriting' },
    //     { name: '장소 맞추기', link: '/place' },
    //     { name: '오목게임', link: '/omok' },
    //     { name: '미궁게임', link: '/riddle' }],
    // },
    {
      header: { name: '이벤트', link: '' },
      children: [
        { name: '빛찾기', link: '' },
        { name: '옷입히기', link: '/404' },
        { name: '야비티아이', link: '/jabti' }],
    },
    {
      header: { name: '굿즈', link: '/goods' },
    },

    {
      header: { name: '방명록', link: '/guest-book' },
    },
    {
      header: { name: '소개', link: '/introduction' },
    },
  ];

  const sectorComp = (sector, i) => (
    <S.Sector key={i}>
      <S.LeftSector
        onClick={() => goToPage(sector.header?.link)}
      >
        {sector.header.name}
      </S.LeftSector>
      <S.RightSector>
        {sector.children
        && sector.children.map((child, j) => (
          <>
            <S.RightComp
              onClick={() => goToPage(`${sector.header.link}${child.link}`)}
              key={j}
            >
              {child.name}
            </S.RightComp>

            {j % 2 === 0
            && j !== sector.children.length - 1
            && <S.Line>|</S.Line>}
          </>
        ))}
      </S.RightSector>

    </S.Sector>
  );

  return (
    <S.StyledMenus>
      <S.Background src={isMobile ? MenuMobile : MenuDestkop} />
      { isAuthorized && (
        <S.SignButton onClick={signOut}>
          <S.SignImage src={SignOut} alt="signOut" />
          <p>로그아웃</p>
        </S.SignButton>
      )}
      { !isAuthorized && (
        <S.SignButton onClick={signIn}>
          <S.SignImage src={SignIn} alt="signIn" />
          <p>로그인</p>
        </S.SignButton>
      )}
      <S.MenuContainer>
        {DATA.map((sector, i) => sectorComp(sector, i))}
      </S.MenuContainer>
    </S.StyledMenus>
  );
}
export default withTheme(Menus);

Menus.propTypes = {
  setMenuIsOpen: PropTypes.func.isRequired,
};
