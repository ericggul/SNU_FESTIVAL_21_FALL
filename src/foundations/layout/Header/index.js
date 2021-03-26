import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MascotInFolder from '@I/svg/mascot/mascot-in-folder.svg';
import Fade from 'react-reveal/Fade';
import { preloadImage } from '@U/functions/preload';
import LogoImage from '@I/png/logo.png';
import ClosingFestival from '@I/jpg/closing-festival.jpg';
import Menus from '@F/layout/Menus';
import * as S from './styles';

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (menuIsOpen) {
      [LogoImage, ClosingFestival].forEach(preloadImage);
    }
  }, [menuIsOpen]);

  const changeUrl = useCallback((route) => {
    history.push(route);
    setMenuIsOpen(false);
  }, [history]);

  const Logo = (
    <S.Logo onClick={() => changeUrl('/')}>
      <S.LogoImage
        src={MascotInFolder}
        alt="mascot"
      />
      { menuIsOpen && (
        <Fade duration={800}>
          <S.BasicText>
            <p>서울대학교 2021 봄축제</p>
            <p>페스월드</p>
          </S.BasicText>
        </Fade>
      )}
    </S.Logo>
  );

  const MenuHamburger = (
    <S.MenuButton onClick={() => setMenuIsOpen(!menuIsOpen)}>
      <S.MenuButtonBar menuIsOpen={menuIsOpen} width="100%" />
      <S.MenuButtonBar menuIsOpen={menuIsOpen} width="66%" />
      <S.MenuButtonBar menuIsOpen={menuIsOpen} width="33%" />
    </S.MenuButton>
  );

  const HeaderBar = (
    <S.HeaderBarContainer>
      <S.HeaderBar>
        {Logo}
        {MenuHamburger}
      </S.HeaderBar>
    </S.HeaderBarContainer>
  );

  const openedMenu = (
    <Fade duration={800}>
      <Menus setMenuIsOpen={setMenuIsOpen} />
    </Fade>
  );

  return (
    <S.StyledHeader id="Header">
      {HeaderBar}
      {menuIsOpen && openedMenu}
    </S.StyledHeader>
  );
}
export default Header;
