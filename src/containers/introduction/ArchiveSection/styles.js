import styled from 'styled-components';
import media from 'styled-media-query';
import { FlexCenterStyle } from '@S/responsive/display';
import { rgba } from 'polished';

export const Wrapper = styled.div`
  ${FlexCenterStyle};
  height: ${({ theme }) => theme.windowHeight}px;
`;

export const StyledArchiveSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  background: ${({ theme }) => theme.palette.DARK_PURPLE};
  
  // max-width: 800px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.palette.LIGHT_PURPLE};

  margin: 1.5rem 0;
`;

export const Poster = styled.div`
  width: 100%;
  height: 100%;
  
  img {
    width: 100%;
    pointer-events: none;
    user-select: none;
    border-radius: 10px;
  }
`;

export const Texts = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  margin-top: 1rem;
  
  p {
    color: ${({ theme }) => theme.palette.GRAY90};
    margin: 0;
    line-height: 1.6;

    &:nth-of-type(1) {
      font-size: 1.5rem;
      font-weight: bold;
      color: transparent;
      -webkit-text-stroke: 1px ${({ theme }) => theme.palette.LIGHT_PURPLE}
    }
    
    &:nth-of-type(2) {
      font-size: 2.2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.palette.LIGHT_PURPLE};
    }
    
    &:nth-of-type(3) {
      width: 30rem;
      height: 5rem;
      margin-top: 1rem;
      font-size: 1rem;
      color: ${({ theme }) => theme.palette.LIGHT_PURPLE, 0.45};
      
      word-break: keep-all;
      text-align: center;
    }
  }
`;
