import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledAliceTheme = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
  
  @keyframes background {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  opacity: 0;
  animation-name: background;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-delay: 1s;
`;

export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ConfettiWrapper = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.base};
`;
