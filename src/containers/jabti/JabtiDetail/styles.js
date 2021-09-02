import styled, { css } from 'styled-components';
import { FlexCenterStyle, RandomSetStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';
import Box from '@I/jabti/Box.svg';

const getRandom = (a, b) => Math.random() * (b - a) + a;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  background: ${({ theme }) => theme.palette.DARK_PURPLE};
  z-index: -5;
`;

export const ImageTop = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
`;

export const ImageBottom = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
`;

export const StyledTarotDetail = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base};
  ${FlexCenterStyle};
`;

const width = css`
  width: 80%;
  max-width: 500px;
`;

const appear = css`
  @keyframes appear-2 {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  animation-name: appear-2;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

export const Body = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-top: 10rem;

  padding: 2rem 0 10rem;
  box-sizing: border-box;
  
  color: white;
  
  p {
    margin-top: 1.5rem;
    margin-bottom: 0.2rem;
    font-weight: 300;
    font-size: 1rem;
  }
`;

export const HeaderText = styled.div`
  text-align: center;
  font-size: 1.8rem;
  width: 80%;

  ${appear};
  opacity: 0;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100vw;
  max-height: 500px;
  position: relative;
  margin-top: -2rem;

  ${appear};
  opacity: 0;
  animation-delay: 1s;
`;

export const ResultImage = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  ${({ over4 }) => over4 && 'left: -min(2.08vw, 1.04px)'};
`;

export const ResultImageText = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  ${({ over4 }) => over4 && 'top: min(30vw, 150px)'};
`;

export const ExplainText = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 200;
  word-break: keep-all;
  width: 80%;
  line-height: 1.7;

  ${appear};
  opacity: 0;
  animation-delay: 1.5s;
`;

export const RecommendSection = styled.div`
  ${FlexCenterStyle};
  margin-top: 0.5rem;
  flex-direction: row;

  ${appear};
  opacity: 0;
  animation-delay: 2s;
`;

export const RecommendBox = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  margin: 2rem 0.8rem;
  position: relative;
  width: 13rem;
  height: 5.7rem;
  ${({ expandHeight }) => expandHeight && 'height: 8.5rem'};
  border-radius: 1.2rem;
  text-align: center;
`;

export const RecommendBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.75);
  border-radius: 1.2rem;
  filter: blur(0.3rem);
  z-index: -3;
`;

export const RecommendIndicator = styled.div`
  font-size: 1.25rem;
  color: black;
  font-weight: 600;
  text-shadow: 0 3px 6px rgba(0,0,0,0.16);
`;

export const RecommendResult = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-shadow: 0 3px 6px rgba(0,0,0,0.3);
  color: ${({ color }) => color};
`;

export const Button = styled.div`
  ${width};

  margin-top: 6rem;
  border-radius: 5px;
  padding: 1.5rem 0;
  box-sizing: border-box;
  ${HoverStyle};

  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.PURPLE75};
  box-shadow: 0 0 10px 0 #a3a9ff;
  background-color: white;
`;

export const LinkSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: row;

  ${appear};
  opacity: 0;
  animation-delay: 2s;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 8rem;
  padding: 0 1rem;
  cursor: pointer;

  
  img {
    width: 2.8rem;
    height: 2.8rem;
    margin: 0.3rem 2.6rem;
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.windowHeight * 0.85}px;
  ${appear};
  opacity: 1;
  animation-delay: 3s;
  animation-direction: reverse;
`;
