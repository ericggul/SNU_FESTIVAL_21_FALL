import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { motion } from 'framer-motion';

export const StyledTitle = styled(motion.div)`
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  ${FlexCenterStyle};
  flex-direction: column;
  background: ${({ theme }) => theme.palette.LIGHT_PURPLE};
  color: ${({ theme }) => theme.palette.WHITE};

  padding: 0.4rem 2.3rem;
  border-radius: 1.2rem;
  margin: 2rem;
  
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1.2rem;
    box-shadow: 
      0 0 3px ${({ theme }) => theme.palette.LIGHT_PURPLE},
      0 0 10px ${({ theme }) => theme.palette.LIGHT_PURPLE};

  }
`;

export const Text = styled.div`
  background: linear-gradient(90deg,  #eee, #fff,  #eee);
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @keyframes move {
    0%{ 
      background-position: -10rem;
    }
    
    to{
        background-position: 10rem;
    }
  }

  animation: move 3s linear infinite;
`;
