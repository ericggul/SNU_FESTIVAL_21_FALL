import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MascotInFolder from '@I/svg/mascot/mascot-in-folder.svg';
import Back from '@I/svg/back.svg';
import Fade from 'react-reveal/Fade';
import Menus from '@F/layout/Menus';
import styled, { css } from 'styled-components';
import * as S from './styles';

function Header({ hamburgerColor, backVisible = true }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [backAnimation, setBackAnimation] = useState(false);
  const history = useHistory();

  // const goBack = useCallback((route) => {
  //   history.push(route);
  //   setMenuIsOpen(false);
  // }, [history]);

  const backClick = useCallback(() => {
    setBackAnimation(true);
    history.goBack();
  }, []);

  const Logo = (
    <S.Logo>
      {backVisible && <S.LogoImage onClick={backClick} src={Back} backAnimation={backAnimation} />}
      { menuIsOpen && (
        <Fade duration={800}>
          <S.BasicText onClick={() => history.push('/')}>
            <p>서울대학교 가을축제 (11.2-5)</p>
            <p>관악의 밤</p>
          </S.BasicText>
        </Fade>
      )}
    </S.Logo>
  );

  const MenuHamburger = (
    <S.MenuButton onClick={() => setMenuIsOpen(!menuIsOpen)}>
      <S.MenuButtonBar color={hamburgerColor} menuIsOpen={menuIsOpen} width="100%" />
      <S.MenuButtonBar color={hamburgerColor} menuIsOpen={menuIsOpen} width="100%" />
      <S.MenuButtonBar color={hamburgerColor} menuIsOpen={menuIsOpen} width="67%" />
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
    <Menus setMenuIsOpen={setMenuIsOpen} />
  );

  return (
    <S.StyledHeader id="Header">
      {HeaderBar}
      {menuIsOpen && openedMenu}
    </S.StyledHeader>
  );
}
export default Header;

Header.propTypes = {
  hamburgerColor: PropTypes.string,
};

Header.defaultProps = {
  hamburgerColor: 'white',
};

export const HeaderContent = styled.div`
  z-index: ${({ theme }) => theme.zIndex.header - 1};

  ${props => props.fixed && css`
    position: fixed;
    top: 0;
  `};
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  min-height: 65px;
  
  background-color: transparent;
  color: ${props => props.color || 'white'};
  font-size: 1.5rem;
  font-weight: bold;
  
  ${props => props.hasBoxShadow && css`
    box-shadow: rgba(0, 0, 0, 0.12) 0 3px 5px 2px;
  `}
  
`;
