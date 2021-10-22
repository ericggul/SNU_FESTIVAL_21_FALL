import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { motion } from 'framer-motion';

export const StyledMiniGame = styled.div`
  background-image: linear-gradient(to top, 
    ${({ theme }) => theme.palette.SKYLIGHT_PURPLE}, 
    ${({ theme }) => theme.palette.SKYLIGHT_BLUE} 50%, 
    ${({ theme }) => theme.palette.SKYLIGHT_PURPLE} 100%);
  height: ${({ theme }) => theme.windowHeight}px;
`;

export const StyledContainer = styled.div`
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

export const EventText = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 1.5rem;
  text-align: center;
  width: 100%;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;
