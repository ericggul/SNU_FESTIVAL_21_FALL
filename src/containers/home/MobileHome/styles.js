import styled, { css } from 'styled-components';
import { HoverStyle } from '@S/responsive/mouse';
import { FlexCenterStyle } from '@S/responsive/display';
import { FluctuationAnimation, VibrateAnimation } from '@S/responsive/animation';

export const StyledMobileHome = styled.div`
  position: relative;
  width: 100%;
  overscroll-behavior-y: none;
  background-color: ${({ theme }) => theme.palette.HOME_PURPLE};
  @keyframes change-color{
    0%{ background-color: black;}
    100%{ background-color: ${({ theme }) => theme.palette.HOME_PURPLE};}
  }
  animation: change-color 2s linear forwards;
`;

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.palette.HOME_PURPLE};
  overflow: hidden;

  opacity: 0; filter: blur(50px);
  @keyframes appearMobileHome{
    0%{ opacity: 0; filter: blur(50px);}
    100%{ opacity: 1;}
  }

  ${({ isLoading }) => !isLoading && 'animation: appearMobileHome 1.5s linear backwards;'}
 
  transition: opacity filter 1s;
  ${({ isLoading }) => !isLoading && 'opacity: 1; filter: blur(0);'}
`;
