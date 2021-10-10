import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const Background = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
  pointer-events: none;
`;

export const Image = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
`;

export const Bus = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};

  @keyframes bus-move{
    0%{ transform: translate(0, 0);}
    10%{ transform: translate(${({ width, vector }) => (width * vector[0]) / 10}px, -${({ width, vector }) => (width * vector[1]) / 1}px);}
    20%{transform: translate(0, 0);}
  }
  animation: bus-move 3s infinite;
`;

export const StandContainer = styled.div`
  position: absolute;
  width: ${({ width }) => width}px;
  ${FlexCenterStyle};
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
`;

export const StandImage = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  top: 0;
  left: 0;
`;

export const LightImage = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};

  @keyframes occassional{
    0%{ opacity: 0;}
    1%{opacity: 1;}
    1.5%{opacity: 0.4;}
    2%{opacity: 0.8;}
    2.5%{opacity: 0.2;}
    3%{opaicty: 0.4;}
    4%{opacity: 0;}
  }

  @keyframes occasionalTwo{
    0%{ opacity: 0;}
    1%{ opacity: 0.3;}
    4%{ opacity: 0;}
    6%{ opacity: 1;}
    7%{ opacity: 0;}
  }

  opacity: 1;
  ${props => !props.lightOn && css`opacity: 0;`};
  ${props => !props.lightOn && css`animation: occassional 30s linear infinite;`};
  animation-delay: ${props => props.delay}s;
`;

export const Rio = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
  transform-origin: center;
  @keyframes rotate{
    0%{transform: rotate(0);}
    20%{transform: rotate(-7deg);}
    22%{transform: rotate(2deg);}
    30%{transform: rotate(0);}
    50%{transform: rotate(-5deg);}
    53%{transform: rotate(2deg);}
    55%{transform: rotate(0deg);}
    70%{transform: rotate(-13deg);}
    72%{transform: rotate(0);}
    90%{transform: rotate(-10deg);}
  }

  animation: rotate 12s linear infinite;
`;
