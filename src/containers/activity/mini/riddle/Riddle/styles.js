import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledRiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  background: rgb(228, 232, 249);
  min-height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
  flex-direction: column;
  
  @media (orientation: landscape) {
    height: 100%;
    padding: 2rem 0;
  }

  ${({ backgroundTransit }) => backgroundTransit === 1 && 'background: rgb(250, 250, 250);'}
  ${({ backgroundTransit }) => backgroundTransit === -1 && 'background: rgb(200, 225, 248);'}
`;

export const OpeningWrapper = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  // ${media.lessThan('large')`
  //   flex-direction: column;
  // `};
`;

export const Opening = styled.div`
  position: relative;
  margin: 4rem 2rem;
  ${HoverStyle};

  width: ${({ theme }) => theme.windowHeight * (3.5 / 10)}px;
    height: ${({ theme }) => theme.windowHeight * (3.5 / 10)}px;
  ${media.lessThan('medium')`
    width: ${({ theme }) => theme.windowHeight * (2.5 / 10)}px;
    height: ${({ theme }) => theme.windowHeight * (2.5 / 10)}px;
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
`;
