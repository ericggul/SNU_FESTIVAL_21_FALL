import styled from 'styled-components';
import media from 'styled-media-query';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';
import { motion } from 'framer-motion';

export const StyledGuide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.3rem;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.palette.WHITE};
  
  p {
    margin: 0;
    line-height: 1.6;
    font-weight: normal;
  }
  
  p:nth-of-type(1) {
    font-weight: 500;
  }
  
  p:nth-of-type(2) {
  
  }
  
  p:nth-of-type(3) {

  }
  
`;

export const Button = styled.div`
  margin: 1.5rem 0 0;
  ${FlexCenterStyle};
  width: 100%;
  max-width: 550px;
  height: 4rem;

  color: white;
  background-color: ${({ theme }) => theme.palette.PURPLE50};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  
  ${HoverStyle};
`;
