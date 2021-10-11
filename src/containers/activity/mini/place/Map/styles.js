import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const MapContainer = styled.div`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

`;

export const Map = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  object-fit: cover;

  @keyframes earthquake{
    0%{ transform: rotate(-0deg);}
    5%{ transform: rotate(-3deg);}
    10%{ transform: rotate(2deg);}
    15%{ transform: rotate(-1.8deg);}
    20%{ transform: rotate(1.4deg);}
    25%{ transform: rotate(-1.2deg);}
    30%{ transform: rotate(1deg);}
    35%{ transform: rotate(-.75deg);}
    40%{ transform: rotate(.5deg);}
    45%{ transform: rotate(-.5deg);}
    50%{ transform: rotate(.4deg);}
    55%{ transform: rotate(-.4deg);}
    60%{ transform: rotate(.3deg);}
    65%{ transform: rotate(-.3deg);}
    70%{ transform: rotate(.3deg);}
    75%{ transform: rotate(-.27deg);}
    80%{ transform: rotate(.2deg);}
    85%{ transform: rotate(-.2deg);}
    90%{ transform: rotate(.1deg);}
    95%{ transform: rotate(-.1deg);}
    100%{ transform: rotate(0deg);}
  }

  animation: earthquake 1.5s linear;
  animation-delay: .9s;
`;

export const PointerWrapper = styled.div`
transform: translateY(-100vh);
  @keyframes appear{
    0%{ transform: translateY(-100vh)};
    80%{transform: translateY(1vh)};
    90%{transform: translateY(-.5vh)};
    95%{transform: translateY(.25vh)};
    100%{transform: translateY(0)};
  }

  
  animation: appear .5s forwards;
  animation-delay: ${props => props.delay}s;
`;

export const Pointer = styled.img`
  position: absolute;
  height: auto;
  cursor: pointer;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
  ${props => props.width && css`width: ${props.width}px`};
  
  @keyframes zigzag {
    0% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(-.1rem, .1rem) rotate(-5deg); }
    66% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(.1rem, .1rem) rotate(10deg); }
  }
  
  
  ${props => props.animate && 'animation: zigzag 1s infinite alternate;'}

`;

export const Image = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.width && css`width: ${props.width}px`};
  height: ${({ height }) => height}px;
  margin: auto;
  height: auto;
  object-fit: cover;

  transform: translateY(-100vh) rotate(-4deg);
  @keyframes fallDown{
    0%{
      transform: translateY(-100vh) rotate(-4deg);
    } 
    50%{
      transform: translateY(0) rotate(0deg);
    }
    60%{
      transform: rotate(3deg);
    }
    70%{
      transform: rotate(-2deg);
    }
    80%{
      transform: rotate(2deg);
    }
    80%{
      transform: rotate(-1deg);
    }
    100%{
      transform: translate(0, 0) rotate(0deg);
    }
  }

  animation: fallDown .8s ease-in forwards;
  animation-delay: 0.5s;
  
`;
