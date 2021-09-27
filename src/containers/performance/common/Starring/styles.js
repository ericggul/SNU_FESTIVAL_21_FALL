import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledTitle = styled.div`
  margin: 2rem;
  margin-bottom: 4rem;
  font-size: 1.3rem;
  font-weight: 500;
  position: relative;
  ${FlexCenterStyle};
  justify-content: space-between;
  width: ${({ theme }) => theme.windowWidth * 0.8}px;

  flex-direction: column;
  color: ${({ theme }) => theme.palette.WHITE};

`;

export const Row = styled.div`
  ${FlexCenterStyle};
  width: 100%;
  flex-direction: row;
`;

export const Name = styled.div`
  margin-right: calc(min(20vw, 180px));
`;

export const Time = styled.div`

`;
