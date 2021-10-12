import styled, { css } from 'styled-components';
import '@/static/font/font.css';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';
import { FluctuationAnimation, VibrateAnimation } from '@S/responsive/animation';

export const StyledHome = styled.div`
  position: relative;
  width: 100%;
  background-image: 
  linear-gradient(to bottom, 
    ${({ theme }) => theme.palette.HOME_PURPLE2}, 
    ${({ theme }) => theme.palette.HOME_PURPLE3} 100%);
  ${FlexCenterStyle};
  
  z-index: ${({ theme }) => theme.zIndex.base};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // @keyframes change-color{
  //   0%{ background-color: black;}
  //   100%{ background-color: ${({ theme }) => theme.palette.HOME_PURPLE2};}
  // }
  // animation: change-color 1s linear;
`;

export const Wrapper = styled.div`
  position: relative;
  top: 150px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-image: 
  linear-gradient(to bottom, 
    ${({ theme }) => theme.palette.HOME_PURPLE2}, 
    ${({ theme }) => theme.palette.HOME_PURPLE3} 100%);

  @keyframes appear{
    0%{ opacity: 0; filter: blur(100px);}
    100%{ opacity: 1;}
  }
  animation: appear 1s linear backwards;
  animation-delay: .3s;
`;
