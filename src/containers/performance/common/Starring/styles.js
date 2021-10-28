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

export const Container = styled.div`
  ${FlexCenterStyle};
  width: 100%;
  flex-direction: column;
`;

export const Row = styled.div`
  ${FlexCenterStyle};
  width: 100%;
  flex-direction: row;
  margin: .3rem 0;
  ${({ nowStarring }) => nowStarring
  && 'text-shadow: 0 0 .5rem white;'}
`;

export const Name = styled.div`
  width: 40%;
`;

export const Time = styled.div`
  width: 40%;
  text-align: right;
  font-weight: 300;
  ${({ nowStarring }) => nowStarring && 'font-weight: 700;'}
`;

export const Songs = styled.div`
  width: 80%;
  font-size: .9rem;
  font-weight: 300;
  word-break: keep-all;
  margin-bottom: .7rem;
`;
