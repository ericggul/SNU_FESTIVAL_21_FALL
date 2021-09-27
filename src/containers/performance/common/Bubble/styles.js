import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { motion } from 'framer-motion';

export const StyledBubble = styled(motion.div)`
  position: relative;
  ${FlexCenterStyle};
  flex-direction: column;
  background: ${({ theme }) => theme.palette.WHITE};
  width: calc(min(50vw, 300px));
  height: calc(min(14vw, 60px));
  border-radius: calc(min(5vw, 30px));
  box-shadow: 
      0 0 3px ${({ theme }) => theme.palette.WHITE},
      0 0 5px ${({ theme }) => theme.palette.WHITE};

  p {
    margin: 0;
    line-height: 1.3;
    color: ${({ theme }) => theme.palette.DARK_PURPLE};
  }

  p:nth-of-type(1) {
    font-weight: normal;
  }
  
  p:nth-of-type(2) {
    font-weight: 500;
    word-break: keep-all;
  }

  &:after{
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 0.7rem solid transparent;
    border-right-color: ${({ theme }) => theme.palette.WHITE};

    border-left: 0;

    margin-top: -0.7rem;
    margin-left: -0.5rem;
  }

  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: calc(min(5vw, 30px));
    box-shadow: 
      0 0 8px ${({ theme }) => theme.palette.WHITE},
      0 0 15px ${({ theme }) => theme.palette.WHITE};
    opacity: 0.3;
    @keyframes opacity{
      from{ opacity: 0.3; }
      to{opacity: 1; }
    }
    animation: opacity 4s infinite alternate;
  }

`;
