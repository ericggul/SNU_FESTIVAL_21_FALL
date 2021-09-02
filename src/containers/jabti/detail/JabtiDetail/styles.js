import styled, { css } from 'styled-components';
import { FlexCenterStyle, RandomSetStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';
import Box from '@I/jabti/Box.svg';

const getRandom = (a, b) => Math.random() * (b - a) + a;

export const Detail = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base};
  ${FlexCenterStyle};
`;

const width = css`
  width: 80%;
  max-width: 500px;
`;

export const appear = css`
  @keyframes appear-2 {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  animation-name: appear-2;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

export const Body = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-top: 15vh;

  padding: 2rem 0 10rem;
  box-sizing: border-box;
  
  color: white;
  
  p {
    margin-top: 1.5rem;
    margin-bottom: 0.2rem;
    font-weight: 300;
    font-size: 1rem;
  }
`;

export const HeaderText = styled.div`
  text-align: center;
  font-size: 1.8rem;
  width: 80%;

  ${appear};
  opacity: 0;
`;

export const ExplainText = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 200;
  word-break: keep-all;
  width: 80%;
  line-height: 1.7;

  ${appear};
  opacity: 0;
  animation-delay: 1.5s;
`;

export const Button = styled.div`
  ${width};

  margin-top: 6rem;
  border-radius: 5px;
  padding: 1.5rem 0;
  box-sizing: border-box;
  ${HoverStyle};

  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.PURPLE75};
  box-shadow: 0 0 10px 0 #a3a9ff;
  background-color: white;
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.windowHeight * 0.85}px;
  ${appear};
  opacity: 1;
  animation-delay: 3s;
  animation-direction: reverse;
`;
