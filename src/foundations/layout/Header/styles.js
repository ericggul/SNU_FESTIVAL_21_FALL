import styled, { css } from 'styled-components';
import { HoverStyle } from '@S/responsive/mouse';
import '@/static/font/font.css';

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  z-index: ${({ theme }) => theme.zIndex.header};
`;

export const HeaderBarContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.header + 1};
`;

export const HeaderBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 65px;
  padding: 15px 20px;
  box-sizing: border-box;
`;

export const Logo = styled.div`  
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 2.5rem;
  height: 100%;
  cursor: pointer;
  @keyframes backmove{
    0%{transform: translateX(0);}
    50%{transform: translateX(-3px);}
    100%{transform: translateX(0);}
  }
  transition: transform .4s;
  ${({ backAnimation }) => backAnimation && 'transform: translateX(-5px);'}

  filter: drop-shadow(0 0 .5rem white);
`;

export const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 32px;
  height: 32px;
  cursor: pointer;


`;

export const MenuButtonBar = styled.div`
  width: ${props => props.width};
  height: 0;
  margin-left: auto;

  box-sizing: border-box;
  border: solid 2px ${props => (props.menuIsOpen ? 'white' : props.color)};
  background-color: ${props => (props.menuIsOpen ? 'white' : props.color)};

  transform-origin: center;
  transform: rotate(0deg);
  transition: transform, opacity, width, border, background-color, 1s;
  will-change: transform, opacity, width;

  box-shadow: 0 0 .5rem white;

  ${props => props.menuIsOpen && css`
    &:first-of-type {
      opacity: 0;
      transform: translateY(11px) rotate(-405deg);
    }
    &:nth-of-type(2) { 
      transform: rotate(405deg);
    }
    &:last-of-type {
      width: 100%;
      transform: translateY(-11px) rotate(135deg);
    }
  `};

`;

export const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${({ theme }) => theme.windowHeight}px;
  bottom: 0px;
  object-fit: cover;
  object-position: center bottom;
  z-index: ${({ theme }) => theme.zIndex.header - 1};
`;

export const BasicText = styled.div`
  height: 100%;
  display: flex;
  margin-left: 1.4rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  
  p {
    overflow-x: hidden;
    margin: 0;
    color: white;
    
    &:first-child {
      font-size: 12px;
    }
    
    &:last-child {
      margin-top: 2px;
      font-size: 16px;
      line-height: 1.2;
    }
  }
`;
