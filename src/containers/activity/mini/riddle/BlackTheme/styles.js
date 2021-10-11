import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledBlackTheme = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
  flex-direction: column;
  

  background-position: center bottom;

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
