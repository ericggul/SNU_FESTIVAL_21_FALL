import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledHandwriting = styled.div`
    ${FlexCenterStyle};
    flex-direction: column;

`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    ${FlexCenterStyle};
    flex-direction: column;
    background: ${({ theme }) => theme.palette.HANDWRITING_PURPLE};
`;

export const Description = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  color: white;
  margin: 1rem;
`;
