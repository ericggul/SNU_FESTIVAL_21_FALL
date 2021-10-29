import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { motion } from 'framer-motion';

export const StyledActivity = styled.div`
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

  @keyframes simple{
    0%{ opacity: 0; transform: rotate(0deg);}
    20%{ opacity: 1; transform: rotate(2deg);}
    100%{ opacity: 1; }
  }

  filter: drop-shadow(0 0 10px white);
  animation: simple 1s infinite linear alternate backwards;
  animation-delay: ${props => props.delay}s;
`;
