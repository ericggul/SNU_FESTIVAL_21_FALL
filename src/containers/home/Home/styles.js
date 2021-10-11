import styled, { css } from 'styled-components';
import '@/static/font/font.css';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';
import { FluctuationAnimation, VibrateAnimation } from '@S/responsive/animation';

export const StyledHome = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  background-color: ${({ theme }) => theme.palette.HOME_PURPLE2};
  ${FlexCenterStyle};
  min-height: ${({ height }) => height}px;
  
  z-index: ${({ theme }) => theme.zIndex.base};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @keyframes change-color{
    0%{ background-color: black;}
    100%{ background-color: ${({ theme }) => theme.palette.HOME_PURPLE2};}
  }
  animation: change-color 1s linear;
`;

export const Wrapper = styled.div`
  position: relative;
  top: 150px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.palette.HOME_PURPLE2};

  @keyframes appear{
    0%{ opacity: 0; filter: blur(100px);}
    // 30%{ opacity: 0.6; filter: blur(100px);}
    // 60%{ opacity: 0.7; filter: blur(40px);}
    // 80%{ opacity: 1; filter: blur(30px);}
    100%{ opacity: 1;}
  }
  animation: appear 1s linear backwards;
  animation-delay: .3s;
`;
