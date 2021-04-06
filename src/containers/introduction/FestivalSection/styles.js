import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import FestivalBackground from '@I/introduction/festival_background.jpg';
import { ResponsiveWidthStyle } from '@S/responsive/display';

export const StyledFestivalSection = styled.div`
  background-image: url(${FestivalBackground});
  width: 100%;
  overflow-x: hidden;
  height: auto;

  background-repeat: no-repeat;
  background-size: cover;
  padding: 1.5rem 0;
`;

export const Title = styled.div`
  ${ResponsiveWidthStyle};
  position: relative;
  margin-bottom: 1rem;
  
  height: 150px;
  ${media.lessThan('medium')`
    height: 100px;
  `};
`;

export const Image = styled.img`
  ${ResponsiveWidthStyle};
  height: auto;
`;

export const AbsoluteImage = styled.img`
  position: absolute;
  height: auto;
  ${ResponsiveWidthStyle};
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
  ${props => props.right && css`right: ${props.right}px`};
  ${props => props.bottom && css`bottom: ${props.bottom}px`};
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
    margin-left: 7%;
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