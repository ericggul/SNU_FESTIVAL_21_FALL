import styled from 'styled-components';
import media from 'styled-media-query';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledGoodsDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;

  max-width: 500px;
  color: ${({ theme }) => theme.palette.WHITE};
  padding: 1rem 0;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BasicSection = styled(motion.div)`
  margin-top: 1.5rem;
  padding: 0 2rem;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  width: 100%;

  color: ${({ theme }) => theme.palette.WHITE};
  font-weight: bold;

  div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    
    p:first-of-type {
      margin: 1.5rem 0;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.palette.WHITE};
    }
    p:last-of-type {
      margin: 1.5rem 0;
      font-size: 1.3rem;
    }
  }
`;

export const Window = styled.div`
  width: 100%;
  height: auto;
`;

export const Texts = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  font-size: 1.5rem;
  font-weight: 600;
`;
export const Name = styled.div`
  margin-left: 0.5rem;
`;

export const Image = styled(motion.div)`
  width: 100%;
  ${media.lessThan('medium')`
    margin-bottom: 1rem;
  `};
`;

export const Hr = styled.hr`
  color: ${({ theme }) => theme.palette.WHITE};
  opacity: 0.5;
  margin: 2rem 0;
`;

export const Button = styled(motion.div)`
  position: fixed;
  bottom: 0;  
  height: 5rem;
  width: 100%;
  ${FlexCenterStyle};
  
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.palette.LIGHT_PURPLE};
  
  cursor: pointer;
`;
