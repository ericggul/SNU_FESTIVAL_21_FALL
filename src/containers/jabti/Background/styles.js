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
  background: ${({ theme }) => theme.palette.DARK_PURPLE};
  z-index: -5;
`;

export const StarsContainer = styled.div`

  @keyframes disappear{
    from{opacity: 1;}
    to{ opacity: 0;}
  }
  ${({ fadeOut }) => fadeOut && `
    animation: disappear 2s forwards
  `}
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
  trnasition: 2s;
`;

export const ImageLeft = styled.img`
  position: absolute;
  left: 0;
  height: 100%;
  width: auto;
  ${appear};
  opacity: 0;
`;

export const ImageRight = styled.img`
  position: absolute;
  right: 0;
  height: 100%;
  width: auto;
  ${appear};
  opacity: 0;
  trnasition: 2s;
`;
