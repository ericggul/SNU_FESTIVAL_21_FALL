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
  font-size: .9rem;
  font-weight: 300;
  text-align: left;
  color: white;
  margin: 6rem 2rem;
  margin-bottom: 0;
  width: 70vw;
  max-width: 50rem;
  word-break: keep-all;
`;

export const EmphText = styled.span`
  word-break: keep-all;
  font-size: 1.3rem;
  font-weight: 600;
`;
