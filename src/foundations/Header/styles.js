import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { palette, zIndex } from '@S/index';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  z-index: ${zIndex.header};
`;

export const HeaderBarContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: ${zIndex.header + 1};
  
  ${props => props.isOpen && css`
    pointer-events: none;
  `};
`;

export const HeaderBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 65px;
  padding: 15px 20px;
`;

export const Logo = styled.div`  
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const LogoText = styled.p`
  margin: 0 0 0 5px;
  font-size: 1.2rem;
  
  transition: color 0.5s;
  color: ${props => (props.isOpen ? palette.BLACK_NEWTRO : palette.GRAY_NEWTRO)};
`;

export const MenuButton = styled.div`
  --width: 35px;
  ${media.lessThan('medium')`
    --width: 28px;
  `};
  
  width: var(--width);
  height: var(--width);
  cursor: pointer;
  ${HoverStyle};
`;

export const MenuButtonBar = styled.div`
  width: 100%;
  height: calc(var(--width) / 7);
  background-color: ${palette.GRAY_NEWTRO};
  margin: calc(var(--width) / 7) 0;
`;

export const OpenedMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${palette.GRAY_NEWTRO};
  opacity: 0.9;
`;

export const NaviText = styled.p`
  margin: 20px 0;
  font-size: 2rem;
  color: ${palette.BLACK_NEWTRO};
  cursor: pointer;
  text-shadow: 1px 1px 2px grey;
  transition-duration: 1s;

  &:hover {
    transition-timing-function: cubic-bezier(.175,.885,.32,1);
    font-size: 3rem;
  }
`;
