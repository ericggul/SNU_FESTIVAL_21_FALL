import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { motion } from 'framer-motion';

export const StyledActivity = styled.div`
  background: ${({ theme }) => theme.palette.DARK_PURPLE};
  height: ${({ theme }) => theme.windowHeight}px;
  overflow: hidden;
`;

export const StyledContainer = styled.div`
  overflow: hidden;
  ${FlexCenterStyle};
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  color: white;

`;

export const Description = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;

export const IconGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ isMobile }) => (isMobile
    ? 'repeat(2, calc(min(46vw, 40vh)));'
    : 'repeat(4, calc(min(23vw, 350px)));')};
`;

export const ConstellationConatiner = styled.div`
    pointer-events: none;
    position: relative;
    ${FlexCenterStyle};
    width: calc(min(100%, 768px));
    margin-left: calc(max(0px, ${({ theme }) => theme.windowWidth / 2 - 250}px));
    ${({ isMobile }) => isMobile && 'margin-left: 0px;'}
    height: ${({ theme }) => theme.windowHeight - 65}px;
`;

export const ConstellationImage = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  ${props => props.top && css`top: ${props.top - 65}px`};
  ${props => props.left && css`left: ${props.left}px`};
  ${props => props.angle && css`transform: rotate(${props.angle}deg);`}
  height: auto;

  @keyframes rotate{
    0%{transform: rotate(3deg);}
    100%{transform: rotate(-7deg);}
  }

  @keyframes filter{
    0%{ filter: hue-rotate(0deg) brightness(1.6);}
    100%{ filter: hue-rotate(30deg) brightness(10);}
  }

  @keyframes opaque{
    0%{ opacity: 0.5; }
    5%{ opacity: 1;}
    10%{ opacity: 0.6;}
    12%{ opacity: 0.9;}
    14%{opacity: 0.5;}
    18%{opacity: 1;}
    25%{ opacity: 0.4;}
    30%{ opacity: 0.6;}
    32%{opacity: 0.8;}
    35%{opacity: 1;}
    65%{opacity: 1;}
    70%{opacity: 0.4;}
    80%{opacity: 0.7;}
    85%{opacity: 0.3;}
    90%{opacity: 1;}
  }
  @keyframes simple{
    0%{ opacity: 1; transform: rotate(0deg);}
    100%{ opacity: 0; transform: rotate(10deg);}
  }
  animation: simple 8s infinite linear alternate;
  // ${props => props.delay && 'animation: filter 3s infinite alternate'};
  ${props => !props.delay && 'animation: simple 8s infinite linear alternate;'};
  animation-delay: -${props => props.delay}s;
`;
