import styled, { css, keyframes } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

const appear = keyframes`
  0%{ opacity: 0; filter: blur(100px);}
  50%{ opacity: 0.5; filter: blur(80px);}
  100%{ opacity: 1;}
`;

export const Background = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};

  pointer-events: none;
`;

export const BackgroundMiddle = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
  filter: drop-shadow(0 0 2px #aaa);
  pointer-events: none;
`;

export const BackgroundFront = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
  pointer-events: none;
  filter: drop-shadow(0 0 10px white);
`;

export const Landmark = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
  cursor: pointer;

  @keyframes shine{
    70%{ filter: brightness(1) saturate(100%) drop-shadow(0 0 0 white);}
    100%{filter: brightness(1.5) saturate(140%) drop-shadow(0 ${({ width }) => width / 40}px ${({ width }) => width / 20}px white); 
    }
  }

  animation: shine 5s infinite alternate;
  animation-delay: ${props => props.delay}s;
  &:after{
    content: '';
    position: absolute;
    width: ${({ width }) => width}px;
    ${props => props.top && css`top: ${props.top}px`};
    ${props => props.left && css`left: ${props.left}px`};
    
    filter: drop-shadow(0 0 30px white);
  }
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
    0%{ transform: translateY(0);}
    5%{ transform: translateY(-${({ width }) => (width / 3)}px);}
    10%{transform: translateY(0);}
  }
  animation: bus-move 6s infinite;
  animation-delay: ${props => props.index / 3.7 + 2}s;
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
    60%{transform: rotate(-25deg); opacity: 0.8;}
    63%{transform: rotate(10deg); opacity: 1;}
    65%{transform: rotate(-6deg); }
    67%{transform: rotate(5deg); }
    69%{transform: rotate(-3deg);}
    70%{transform: rotate(2deg);}
    73%{transform: rotate(0);}
  }

  animation: rotate 4s linear infinite;
`;

export const Text = styled.div`
  position: absolute;
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
  font-size: 2rem;
  opacity: 0.5;
  color: #3B2B66;
`;
