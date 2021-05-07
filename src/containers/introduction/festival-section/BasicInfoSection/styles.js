import styled, { css } from 'styled-components';
import { ResponsiveWidthStyle, ResponsiveHeightStyle } from '@S/responsive/display';
import media from 'styled-media-query';

export const Title = styled.div`
  ${ResponsiveWidthStyle};
  position: relative;
  margin-bottom: 1rem;
  
  height: 150px;
  ${media.lessThan('medium')`
    height: 100px;
  `};
`;

export const PosterWrapper = styled.div`
  position: relative;
  ${ResponsiveWidthStyle};
  ${ResponsiveHeightStyle};
`;

export const AbsoluteImage = styled.img`
  position: absolute;
  height: auto;
  ${ResponsiveWidthStyle};
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
  ${props => props.right && css`right: ${props.right}px`};
  ${props => props.bottom && css`bottom: ${props.bottom}px`};
  
  @keyframes rotate {
    to { transform: rotate(-3deg); }
    from { transform: rotate(3deg); }
  }

  ${props => props.rotate && css`
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: ${props.duration}s;
  `};
  
  @keyframes move {
    to { transform: translateX(-15%); }
    from { transform: translateX(10%); }
  }

  ${props => props.move && css`
    animation-name: move;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-duration: ${props.duration}s;
  `};
`;

export const MobileBasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  & > div {
    display: flex;
    flex-direction: column;
    margin: 0 2%;
  }
`;

export const FestivalDescription = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  word-break: keep-all;
  line-height: 2.27;
  color: white;
  text-align: center;
  
  ${media.greaterThan('medium')`
    font-size: 1.2rem;
    font-weight: normal;
    text-align: left;
  `};
`;
