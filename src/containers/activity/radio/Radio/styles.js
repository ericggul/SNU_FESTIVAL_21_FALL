import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledRadio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  min-height: ${({ theme }) => theme.windowHeight}px;
  position: absolute;
  top: 0;
`;

export const Background = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0px;
  object-fit: cover;
  object-position: center bottom;
  z-index: -1;
`;

export const Contents = styled(motion.div)`
  display: flex;

  top: 65px;
  height: ${({ theme }) => theme.windowHeight - 65}px;
  flex-direction: row;
  // height: 100%;
  text-align: center;
  color: white;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  // justify-content: space-between;
  ${({ theme }) => theme.windowWidth > 500 && 'margin-bottom: 5rem;'}
  // ${({ theme }) => theme.windowWidth > 768 && 'justify-content: space-between;'}
`;

export const Container = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const Image = styled.img`
  height: auto;
  width: 50%;
  max-width: 300px;
  filter: drop-shadow(.4rem .4rem .8rem rgba(255, 255, 255, 0.85));
`;

export const Texts = styled.div`
  margin: 2rem 0;
  margin-bottom: 4rem;
  font-size: 1rem;
  font-weigth: 400;
  opacity: .8;
  p{
    margin: 0;
  }
`;

export const Date = styled.div`
  margin: 0.5rem 0;
  font-size: 1rem;
  font-weigth: 400;
  opacity: .8;
  p{
    margin: 0;
  }
`;

export const Paragraph = styled.div`
  font-size: 1rem;
  margin: 2rem 0;
  opacity: .8;
  font-weigth: 300;

`;
