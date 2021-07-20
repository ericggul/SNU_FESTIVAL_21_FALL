/** Menus component developer: 신연상, 이상민 */
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import SignIn from '@I/icon/sign-in.svg';
import SignOut from '@I/icon/sign-out.svg';
import Stamp from '@I/icon/stamp.svg';
import useAuth, { useUser } from '@U/hooks/useAuth';
import * as S from './styles';

function Menus({ setMenuIsOpen }) {
  const history = useHistory();
  const { isAuthorized } = useUser();
  const { signIn, signOut } = useAuth();
  const [openedTab, setOpenedTab] = useState(null);

  const goToPage = useCallback((route) => {
    history.push(route);
    setMenuIsOpen(false);
  }, [history, setMenuIsOpen]);

  const showSubMenu = (tab) => {
    setOpenedTab(tab === openedTab ? null : tab);
  };

  const DropDownButton = (page, tab, delay) => (
    <Fade
      bottom
      duration={500}
      delay={delay}
    >
      <S.NaviText
        onClick={() => showSubMenu(tab)}
      >
        {page}
      </S.NaviText>
    </Fade>
  );

  const NaviButton = useCallback((page, url, delay) => (
    <Fade
      bottom
      duration={500}
      delay={delay}
    >
      <S.NaviText
        onClick={() => goToPage(url)}
      >
        {page}
      </S.NaviText>
    </Fade>
  ), [goToPage]);

  const smallNaviButton = useCallback((page, url, delay) => (
    <Fade
      bottom
      duration={500}
      delay={delay}
    >
      <S.InlineMenu>
        <S.SmallNaviText
          onClick={() => goToPage(url)}
        >
          {page}
        </S.SmallNaviText>
      </S.InlineMenu>
    </Fade>
  ), [goToPage]);

  const inlineStamp = useCallback((delay, count = 1) => (
    <Fade
      bottom
      duration={500}
      delay={delay}
    >
      <>
        {Array(count).fill(null).map((_, index) => (
          <S.Stamp src={Stamp} alt="stamp" key={index} />
        ))}
      </>
    </Fade>
  ), []);

  const openedMenu = (
    <S.OpenedMenu>
      <S.InlineMenu>
        {DropDownButton('공연', 'performance', 300)}
        {inlineStamp(300)}
      </S.InlineMenu>
      {(openedTab === 'performance') && (
        <>
          {smallNaviButton('- 폰서트 LIVE', '/performance/phone-cert', 0)}
          {smallNaviButton('- 힛더스테이지', '/performance/hit-the-stage', 100)}
          {smallNaviButton('- 씽스틸러', '/performance/sing-stealer', 200)}
          {smallNaviButton('- 관악게임토너먼트', '/performance/game-tournament', 300)}
        </>
      )}
      <S.InlineMenu>
        {DropDownButton('행사', 'activity', 350)}
        {inlineStamp(350, 3)}
      </S.InlineMenu>
      {(openedTab === 'activity') && (
        <>
          <S.InlineMenu>
            {smallNaviButton('- 미니게임', '/activity/mini', 0)}
            {inlineStamp(200, 2)}
          </S.InlineMenu>
          {smallNaviButton('- 단체게임', '/activity/group', 100)}
          <S.InlineMenu>
            {smallNaviButton('- 공모전', '/activity/competition', 200)}
            {inlineStamp(400)}
          </S.InlineMenu>
          {smallNaviButton('- 고릴라디오', '/activity/radio', 300)}
        </>
      )}
      {NaviButton('굿즈', '/goods', 400)}
      <S.InlineMenu>
        {NaviButton('방명록', '/guest-book', 450)}
        {inlineStamp(450)}
      </S.InlineMenu>
      {NaviButton('소개', '/introduction', 500)}
      {NaviButton('오늘의 타로', '/tarot', 550)}
      <S.InlineMenu>
        {DropDownButton('TEST', 'test', 600)}
      </S.InlineMenu>
      {(openedTab === 'test') && (
        <>
          {smallNaviButton('Pokemon Go', '/pokemongo', 0)}
          {smallNaviButton('Stage 1', '/pokemongo/wellington-beef-steak', 100)}

        </>
      )}
    </S.OpenedMenu>
  );

  return (
    <S.StyledMenus>
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
      {openedMenu}
    </S.StyledMenus>
  );
}
export default Menus;

Menus.propTypes = {
  setMenuIsOpen: PropTypes.func.isRequired,
};
