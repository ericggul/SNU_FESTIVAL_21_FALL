import styled, { css } from 'styled-components';

export const StyledPokemongo = styled.div`
  position: relative;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 50vw);
  grid-template-rows: repeat(3, 33vh);
  z-index: ${({ theme }) => theme.zIndex.base};
`;

export const EmptyPlace = styled.div`
  border: 1px solid black;
`;

export const CheckedPlace = styled.div`
  border: 1px solid black;
  background: #777;
`;
