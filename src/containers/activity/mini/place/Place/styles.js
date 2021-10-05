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

  width: 100%;
`;
