import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

const getRandom = (a, b) => Math.random() * (b - a) + a;

export const StyledHauntedHouseTheme = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
  
  @keyframes background {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  opacity: 0;
  animation-name: background;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-delay: 1s;
`;

export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Castle = styled.img`
  position: absolute;
  width: 161px;
  height: 254px;
  bottom: 0;
`;

export const Moon = styled.img`
  position: absolute;
  width: 89px;
  height: 88px;
  top: 5%;
  left: 5%;

  @keyframes shine{
    0%{ opacity: 0.7; }
    100%{ opacity: 1; }
  }

  animation: shine 1s infinite alternate;
`;

export const Cloud = styled.img`
  position: absolute;
  bottom: 20%;
  left: 0;
  width: 100%;
  opacity: 0.9;
  
  @keyframes move {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
 
  transform: translateX(-100%);
  animation-name: move;
  animation-duration: 50s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const Bat = styled.img`
  position: absolute;
  width: ${props => props.width}px;
  ${props => props.top && css`top: ${props.top}%`};
  ${props => props.left && css`left: ${props.left}%`};
  ${props => props.right && css`right: ${props.right}%`};
  
  @keyframes rotate {
    0% { transform: rotate(${getRandom(-30, 0)}deg); }
    100% { transform: rotate(15deg); }
  }

  transform: rotate(0deg);
  animation-name: rotate;
  animation-duration: ${props => props.duration}s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
`;

export const Ghost = styled.img`
  position: absolute;
  width: ${props => props.width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}%`};
  ${props => props.bottom && css`bottom: ${props.bottom}%`};
  ${props => props.left && css`left: ${props.left}%`};
  ${props => props.right && css`right: ${props.right}%`};
  
  @keyframes float {
    0%, 100%{ transform:translateY(0) rotate(-4deg); }
    50%{ transform:translateY(-25px) rotate(4deg); }
  }
  animation: float infinite;
  animation-duration: ${({ duration }) => duration}s;
`;
