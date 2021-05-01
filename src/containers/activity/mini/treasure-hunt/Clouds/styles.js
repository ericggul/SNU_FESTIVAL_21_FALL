import styled, { css } from 'styled-components';

export const Clouds = styled.div` 
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Cloud = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}%`};
  ${props => props.left && css`left: ${props.left}%`};
  ${props => props.right && css`right: ${props.right}%`};
  
  @keyframes float-2 {
    0%{ transform: translateY(300%) translateX(0); }
    100%{ transform: translateY(-800%) translateX(50%); }
  }
  transform: translateY(300%) translateX(0);
  animation-name: float-2;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: ${({ duration }) => duration}s;
`;