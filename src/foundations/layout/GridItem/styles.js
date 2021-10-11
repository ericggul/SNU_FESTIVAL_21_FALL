import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { motion } from 'framer-motion';

export const GridItem = styled(motion.div)`
  ${FlexCenterStyle};
  flex-direction: column;
  margin: 2.5vw;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  max-width: calc(min(35vw, 280px));
  height: auto;
  position: relativve;
`;

export const IconImage = styled.img`
  max-width: 100%;
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
      0 0 15px ${({ theme }) => theme.palette.WHITE},
      0 0 20px ${({ theme }) => theme.palette.WHITE},
      0 0 25px ${({ theme }) => theme.palette.WHITE};
    opacity: 0;
    @keyframes opacity{
      from{ opacity: 0; }
      to{opacity: 1; }
    }
    animation: opacity 1.5s infinite linear alternate;
  }
`;