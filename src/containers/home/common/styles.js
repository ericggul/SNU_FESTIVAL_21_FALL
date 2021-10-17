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
    100%{filter: brightness(1.5) saturate(140%) drop-shadow(0 0 ${({ width }) => width / 20}px white); 
  }
  }

  animation: shine 5s infinite alternate;
  animation-delay: ${props => props.delay - 2}s;
  &:after{
    content: '';
    position: absolute;
    width: ${({ width }) => width}px;
    ${props => props.top && css`top: ${props.top}px`};
    ${props => props.left && css`left: ${props.left}px`};
    
    filter: drop-shadow(0 0 30px white);
  }
`;

export const Door = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};

`;

export const Bus = styled.img`
  position: absolute;
  cursor: pointer;
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
    1.5%{opacity: 1;}
    2.25%{opacity: 0.4;}
    3%{opacity: 0.8;}
    3.7%{opacity: 0.2;}
    4.5%{opaicty: 0.4;}
    6%{opacity: 0;}
  }

  @keyframes fromEventAnimate{
    0%{ opacity: 0;}
    3%{opacity: 0.5;}
    5%{opacity: 0.1;}
    7.5%{opacity: 0.7;}
    10%{opacity: 0.3;}
    12.5%{opacity: 0.6;}
    15%{opacity: 0.2;}
    16.5%{opacity: 0.7;}
    17.5%{opacity: 0.4;}
    18.5%{opacity: 0.6;}
    20%{opacity: 0.2;}
    21%{opacity: 0.5;}
    22%{opacity: 0;}
    35%{opacity: 0; transform: scale(1);}
    65%{opacity: 1; transform: scale(3);}
    100%{transform: scale(1);}
  }
  opacity: 1;
  ${props => !props.lightOn && css`opacity: 0;`};
  ${props => !props.lightOn && css`animation: occassional 20s linear infinite;`};
  ${props => props.fromEvent && css`animation: fromEventAnimate 3s linear backwards;`}
  animation-delay: ${props => (props.fromEvent ? 2 : props.delay)}s;
`;

export const Rio = styled.img`
  cursor: pointer;
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

  @keyframes wake{
    0%{ transform: rotate(-7deg);}
    3%{transform: rotate(5deg);}
    6%{transform: rotate(-4deg);}
    8%{transform: rotate(3deg);}
    10%{transform: rotate(-2deg);}
    12%{transform: rotate(1deg);}
    13%{transform: rotate(0);}
  }

  ${props => !props.waked && 'animation: rotate 4s linear infinite;'}
  ${props => props.waked && 'animation: wake 3s linear;'}
`;

export const RioBubble = styled.div`
  ${FlexCenterStyle};
  font-family: 'Bangers';
  color: white;
  font-size: 1.8rem;
  text-align: center;
  position: absolute;
  ${props => props.top && css`top: ${props.top - props.width * 0.2}px`};
  ${props => props.left && css`left: ${props.left + props.width * 0.4}px`};
  height: auto;
  transform: rotate(-7deg);

  @keyframes shake{
    0%{ opacity: 0; transform: rotate(0);}
    50%{opacity: 1; transform: rotate(-10deg);}
    100%{transform: rotate(-7deg);}
  }

  animation: shake 0.4s;
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
