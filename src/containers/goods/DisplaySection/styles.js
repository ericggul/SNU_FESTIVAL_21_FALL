import styled from 'styled-components';
import media from 'styled-media-query';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export const StyledDisplaySection = styled.div`
  display: flex;
  flex-direction: column;
  ${media.greaterThan('medium')`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `};
  width: 100%;

  padding-top: 2rem;
`;

export const Item = styled(motion.div)`
  position: relative;
  width: 100%;
  margin-bottom: 3rem;
  
  ${media.greaterThan('medium')`
    width: 47%;
  `};
  
  cursor: pointer;
  transition: transform 0.5s;
`;
