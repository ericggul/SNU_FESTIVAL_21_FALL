import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledRiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease-out;
`;

export const Body = styled.div`
  width: 100%;

  transition: background 1s linear;
  min-height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
  flex-direction: column;
  overflow-y: hidden;
  
  @media (orientation: landscape) {
    height: 100%;
    padding: 2rem 0;
  }
`;

export const Background = styled.div`
  z-index: -1;
  position: fixed;
  overflow-y: hidden;
  width: 100%;
  height: 550vh;
  
  background: linear-gradient(#83AAE2 0%, rgb(228, 232, 249) 40% 60%, #06102E  77% 100% );
  background-position: 0 50%;
  ${props => props.background === 'White' && 'transform: translateY(200vh);'}
  ${props => props.background === 'Black' && 'transform: translateY(-200vh);'}
  transition: all 1s;

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
  margin: 4rem 4rem;

  border-radius: 7%;
  width: ${({ theme }) => theme.windowHeight * (4 / 10)}px;
  height: ${({ theme }) => theme.windowHeight * (4 / 10)}px;
  ${media.lessThan('medium')`
    width: ${({ theme }) => theme.windowHeight * (2.8 / 10)}px;
    height: ${({ theme }) => theme.windowHeight * (2.8 / 10)}px;
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
