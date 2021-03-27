import styled, { css } from 'styled-components';

const slideAnimation = css`
  @keyframes slide2 {
    0% { opacity: 1; transform: translateY(-100%); }
    30% { opacity: 1; transform: translateY(0); }
    70% { opacity: 1; transform: translateY(0); }
    100% { opacity: 1; transform: translateY(100%); }
  }
  
  &.Slide2.active rect {
    animation-name: slide2;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
  }
`;

export const StyledSlide2 = styled.div`
  position: absolute;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;

  ${slideAnimation};
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(${({ reverse }) => (reverse ? 180 : 0)}deg);
`;

export const Rect = styled.rect`
  width: 100%;
  height: 100%;
  
  fill: ${({ theme }) => theme.base4};
  transition: fill 0.35s;
  
  opacity: 0;
  will-change: opacity, transform;
`;
