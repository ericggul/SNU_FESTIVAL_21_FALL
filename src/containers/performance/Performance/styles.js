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
  text-align: center;

  p{
    font-wieght: 200;
    font-size: 0.6rem;
  }
`;

export const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(min(46vw, 350px)));

  margin-bottom: 5rem;
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
