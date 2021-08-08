import styled, { css } from 'styled-components';

const enlargeAnimation = css`
  @keyframes enlargeTriangle {
    0% { transform: scale(0) rotate(-15deg); }
    100% { transform: scale(1) rotate(115deg); }
  }
  
  &.BlackTriangle.active svg {
    opacity: 1;
    animation-name: enlargeTriangle;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
  }
`;

export const StyledBlackTriangle = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${enlargeAnimation};
`;

export const Svg = styled.svg`
  position: absolute;
  width: 200vh;
  height: 200vh;

  fill: ${({ theme }) => theme.base};
  stroke: ${({ theme }) => theme.base};
  opacity: 0;
  will-change: opacity, transform;
`;
