import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';

export const StyledWhiteTheme = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
  flex-direction: column;
  
  // @keyframes background {
  //   from { opacity: 0; }
  //   to { opacity: 1; }
  // }
  background-position: center bottom;
  // opacity: 0;
  // animation-name: background;
  // animation-fill-mode: forwards;
  // animation-duration: 1s;
  // animation-delay: 1s;
`;

export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  object-fit: cover;
  object-position: center bottom;
`;

export const ConfettiWrapper = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.base};
`;
