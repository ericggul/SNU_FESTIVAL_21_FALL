import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledPlace = styled.div`
    background-image: linear-gradient(to top, 
    ${({ theme }) => theme.palette.PLACE_MINT1}, 
    ${({ theme }) => theme.palette.PLACE_MINT2} 50%, 
    ${({ theme }) => theme.palette.PLACE_MINT1} 100%);
  height: ${({ theme }) => theme.windowHeight}px;
`;

export const Container = styled.div`
    ${FlexCenterStyle};
`;
