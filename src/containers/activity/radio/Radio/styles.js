import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledRadio = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  height: ${({ theme }) => theme.windowHeight}px;
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
  ${FlexCenterStyle};
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 80%;
  text-align: center;
  color: white;
  margin-top: 10rem;
  margin-bottom: 15rem;
  ${({ theme }) => theme.windowWidth > 500 && 'margin-bottom: 5rem;'}
  ${({ theme }) => theme.windowWidth > 768 && 'flex-direction: row;'}
  ${({ theme }) => theme.windowWidth > 768 && 'justify-content: space-between;'}
`;

export const Container = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  margin: 5vw 0;
`;

export const Image = styled.img`
  height: auto;
  width: 50%;
  max-width: 300px;
  filter: drop-shadow(.4rem .4rem .8rem rgba(255, 255, 255, 0.85));
`;

export const Texts = styled.div`
  margin: 2rem 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weigth: 400;
  opacity: .8;
  p{
    margin: 0;
  }
  p:nth-of-type(1){
    font-size: 1.4rem;
    font-weight: 700;
    opacity: 1;
  }
`;

export const Paragraph = styled.div`
  font-size: 1rem;
  opacity: .8;
  font-weigth: 300;
  p{
    margin: 0;
  }
`;

export const Button = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: black;
  margin: 2.5rem 0;
  padding: .5rem 2.5rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: .8rem;
  
  cursor: pointer;
  position: relative;
  transition: transform .4s;
  ${props => props.clicked && 'transform: translate(.4rem, .4rem);'}

  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: .8rem;
    box-shadow: .4rem .4rem .4rem rgba(255, 255, 255, 0.58);
    transition: box-shadow .4s;
    ${props => props.clicked && 'box-shadow: 0 0 .4rem rgba(255, 255, 255, 0.58);'}
  }
`;
