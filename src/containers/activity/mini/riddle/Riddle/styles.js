import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledRiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: all 0.5s ease-out;
`;

export const Body = styled.div`
  width: 100%;
  ${FlexCenterStyle};
  overflow: hidden;
  transition: background 1s linear;
  height: ${({ theme }) => theme.windowHeight - 65}px;
  ${FlexCenterStyle};
  flex-direction: column;
  overflow-y: hidden;
  
  @media (orientation: landscape) {
    height: 100%;
    padding: 4rem 0;
  }
`;

export const Background = styled.div`
  z-index: -1;
  position: fixed;
  overflow-y: hidden;
  width: 100%;
  height: 550vh;
  
  background: rgb(228, 232, 249);
  transition: all 1s;
`;
export const EmphText = styled.span`
  word-break: keep-all;
  font-weight: 600;
`;

export const Expl = styled.div`
  color: #586BBB;
  text-align: center;
  width: 90vw;
  max-width: 50rem;
  font-size: .9rem;
  font-weight: 400;
  word-break: keep-all;
`;

export const OpeningWrapper = styled.div`
  ${FlexCenterStyle};
  flex-direction: row;
  ${media.lessThan('medium')`
    flex-direction: column;
  `};
`;

export const Opening = styled.div`
  position: relative;
  margin: 1rem 2rem;

  border-radius: 7%;
  width: ${({ theme }) => theme.windowHeight * (4 / 10)}px;
  height: ${({ theme }) => theme.windowHeight * (4 / 10)}px;
  ${media.lessThan('medium')`
    width: ${({ theme }) => theme.windowHeight * (3 / 10)}px;
    height: ${({ theme }) => theme.windowHeight * (3 / 10)}px;
  `};

`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: auto;
  z-index: 5;
  pointer-events: none;
 
`;
