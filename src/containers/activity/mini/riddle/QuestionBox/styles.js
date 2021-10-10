import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';
import { rgba } from 'polished';

export const Content = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.base};
  
  ${media.lessThan('medium')`
    width: 80%;
    margin-top: -10rem;
  `};
`;

export const TextImage = styled.img`
  max-width: 200px;
  height: auto;
  z-index: 5;
  pointer-events: none;
  margin-top: 10px;
  margin-bottom: 5vh;
  ${media.lessThan('medium')`
    width: 50%;
    margin-top: ${({ theme }) => theme.windowHeight * 0.1}px;
  `};
`;

export const Question = styled.div`
  ${FlexCenterStyle};
  background-color: transparent;
  width: 100%;
  height: 100%;
  max-width: 550px;
  max-height: 550px;
  border-radius: 15px;
  position: relative;
  
  ${media.lessThan('medium')`
    width: 80vw;
    height: 80vw;
  `};
  
  @keyframes appear {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
  animation-name: appear;
  animation-duration: 2s;
  
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  border-radius: 15px;
  @keyframes appear {
    0% { opacity: 0; }
    50% { opacity: 0; }
    100% { opacity: 1;}
  }
  animation-name: appear;
  animation-duration: 2s;
`;

export const Answer = styled.div`
  ${FlexCenterStyle};
  align-items: center;
  width: 100%;
  height: 2.3rem;
  margin-top: 2rem;
  z-index:${({ theme }) => theme.zIndex.fullScreen};
`;

export const InputBox = styled.input`
  outline: 0;
  width: 70%;
  height: 2.3rem;
  border-radius: 1rem;
  border: solid 1px #ffffff;
  background-color: white;

  color: ${props => props.theme.palette.HANDWRITING_INPUT};
  font-size: 1rem;
  font-weight: 600;
  text-align: center;

  &::placeholder {
    color: ${props => props.theme.palette.HANDWRITING_INPUT};
  }

  margin-right: 1.2rem;
  box-shadow: 0 0 0.5rem white;
`;

export const Button = styled.div`
  ${FlexCenterStyle};
  width: 4.5rem;
  height: 2.3rem;
  background-color: white;
  border-radius: 1.5rem;

  color: ${({ theme }) => theme.palette.HANDWRITING_HANDLE};
  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;
  box-shadow: 0 0 0.5rem white;
`;
