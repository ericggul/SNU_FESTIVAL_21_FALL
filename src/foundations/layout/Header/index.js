import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MascotInFolder from '@I/svg/mascot/mascot-in-folder.svg';
import Fade from 'react-reveal/Fade';
import Menus from '@F/layout/Menus';
import styled, { css } from 'styled-components';
import * as S from './styles';

function Header({ hamburgerColor }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const history = useHistory();

  const goToPage = useCallback((route) => {
    history.push(route);
    setMenuIsOpen(false);
  }, [history]);

  const Logo = (
    <S.Logo onClick={() => goToPage('/')}>
      <S.LogoImage
        src={MascotInFolder}
        alt="mascot"
      />
      { menuIsOpen && (
        <Fade duration={800}>
          <S.BasicText>
            <p>서울대학교 2031 봄축제</p>
            <p>페스트</p>
          </S.BasicText>
        </Fade>
      )}
    </S.Logo>
  );

  const MenuHamburger = (
    <S.MenuButton onClick={() => setMenuIsOpen(!menuIsOpen)}>
      <S.MenuButtonBar color={hamburgerColor} menuIsOpen={menuIsOpen} width="100%" />
      <S.MenuButtonBar color={hamburgerColor} menuIsOpen={menuIsOpen} width="66%" />
      <S.MenuButtonBar color={hamburgerColor} menuIsOpen={menuIsOpen} width="33%" />
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
  
  background-color: ${props => props.backgroundColor || props.theme.palette.PURPLE50};
  color: ${props => props.color || 'white'};
  font-size: 1.5rem;
  font-weight: bold;
  
  ${props => props.hasBoxShadow && css`
    box-shadow: rgba(0, 0, 0, 0.12) 0 3px 5px 2px;
  `}
  
`;
