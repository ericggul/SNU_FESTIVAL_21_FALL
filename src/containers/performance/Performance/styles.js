import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { motion } from 'framer-motion';

export const StyledPerformance = styled.div`
`;

export const StyledContainer = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  color: white;
  margin: 4vw;
`;

export const Description = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 2rem;
  margin-top: 5rem;
`;

export const IconGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, calc(min(46vw, 350px)));

  margin-bottom: 5rem;
`;

export const GridItem = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  margin: 2.5vw;
  cursor: pointer;
`;

export const IconImage = styled.img`
  max-width: calc(min(35vw, 280px));
  height: auto;
`;

export const IconDescription = styled.div`
  position: relative; 
  margin: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  height: 2.2rem;
  width: 7.5rem;
  ${FlexCenterStyle};
  background: white;
  color: ${({ theme }) => theme.palette.BLACK_PURPLE};
  border-radius: 1.1rem;

  box-shadow: 
      0 0 2px ${({ theme }) => theme.palette.WHITE},
      0 0 5px ${({ theme }) => theme.palette.WHITE},
      0 0 7px ${({ theme }) => theme.palette.WHITE},
      0 0 10px ${({ theme }) => theme.palette.WHITE};

  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1.1rem;
    box-shadow: 
      0 0 10px ${({ theme }) => theme.palette.WHITE},
      0 0 15px ${({ theme }) => theme.palette.WHITE};
    opacity: 0.4;
    @keyframes opacity{
      from{ opacity: 0.4; }
      to{opacity: 1; }
    }
    animation: opacity 4s infinite alternate;
  }
  transition: color, background-color, .15s;

`;

export const PosterWrapper = styled.div`
  position: relative;
  width: ${({ theme }) => theme.windowWidth}px;
  height: auto;
`;

export const AbsoluteImage = styled.img`
  position: absolute;
  height: auto;
  width: 100%;
  max-width: 700px;
  margin: auto;
  left: 0;
  right: 0;
`;
