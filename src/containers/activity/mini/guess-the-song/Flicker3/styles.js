import styled, { css } from 'styled-components';

const flickerAnimation = css`
  @keyframes flicker3 {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
  
  &.Flicker3.active {
    animation-name: flicker3;
    animation-duration: 0.05s;
    animation-iteration-count: 10;
  }
`;

export const StyledFlicker3 = styled.div`
  position: absolute;

  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  background-color: ${({ theme }) => theme.base3};

  opacity: 0;
  ${flickerAnimation};
`;
