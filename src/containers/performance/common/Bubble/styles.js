import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { motion } from 'framer-motion';

export const StyledBubble = styled(motion.div)`
  text-align: center;
  position: relative;
  ${FlexCenterStyle};
  flex-direction: column;
  background: ${({ theme }) => theme.palette.WHITE};
  width: calc(min(50vw, 300px));
  word-break: break-word;
  padding: 0 calc(min(3vw, 18px));
  height: calc(min(14vw, 60px));
  ${({ long }) => long && 'font-size: 0.9rem;'}
  border-radius: calc(min(7vw, 30px));
  box-shadow: 
      0 0 3px ${({ theme }) => theme.palette.WHITE},
      0 0 5px ${({ theme }) => theme.palette.WHITE},
      0 0 8px ${({ theme }) => theme.palette.WHITE};

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



`;
