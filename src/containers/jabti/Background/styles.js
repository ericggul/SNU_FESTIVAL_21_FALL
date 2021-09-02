import styled, { css } from 'styled-components';

const appear = css`
  @keyframes appear-2 {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  animation-name: appear-2;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

export const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  z-index: -5;
`;

export const ImageTop = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  ${appear};
  opacity: 0;
`;

export const ImageBottom = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  ${appear};
  opacity: 0;
`;
