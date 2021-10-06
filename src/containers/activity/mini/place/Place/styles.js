import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledPlace = styled.div`
height: ${({ theme }) => theme.windowHeight}px;
  background-image: linear-gradient(to top, 
  ${({ theme }) => theme.palette.PLACE_MINT1}, 
  ${({ theme }) => theme.palette.PLACE_MINT2} 50%, 
  ${({ theme }) => theme.palette.PLACE_MINT1} 100%);
`;

export const Container = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  height: ${({ theme }) => theme.windowHeight}px;
  width: 100%;
`;

export const RioContainer = styled.div`
  width: 30vw;
  margin-top: calc(min(-20vh, -20vw));
  max-width: 200px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
