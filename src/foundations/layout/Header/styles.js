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
  width: 5rem;
  height: 100%;
  cursor: pointer;
  ${HoverStyle};
`;

export const MenuButton = styled.div`
  ${HoverStyle};
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
  border-radius: 5px;
  border: solid 2px ${props => (props.menuIsOpen ? 'white' : props.color)};
  background-color: ${props => (props.menuIsOpen ? 'white' : props.color)};

  transform-origin: right;
  transform: rotate(0deg);
  transition: transform, opacity, width, border, background-color, 1s;
  will-change: transform, opacity, width;

  ${props => props.menuIsOpen && css`
    &:first-of-type {
      transform: rotate(-45deg) scaleX(0.935);
    }
    &:nth-of-type(2) {
      opacity: 0;
    }
    &:last-of-type {
      width: 100%;
      transform: rotate(45deg) scaleX(0.935);
    }
  `};
`;

export const BasicText = styled.div`
  height: 100%;
  display: flex;
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
      font-size: 16px;
      font-family: 'PFStardust', sans-serif;
      line-height: 1.2;
    }
  }
`;
