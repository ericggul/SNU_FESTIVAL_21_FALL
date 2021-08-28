import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const Wrapper = styled.div`
  ${FlexCenterStyle};
  position: relative;
  background-image: linear-gradient(
    ${({ theme }) => theme.palette.LIGHT_PURPLE}, 
    ${({ theme }) => theme.palette.DARK_PURPLE});

`;

export const StyledStaffSection = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 3rem 2rem;

  display: flex;
  flex-direction: column;
  
  z-index: ${({ theme }) => theme.zIndex.base};
`;
