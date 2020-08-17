import styled from 'styled-components';
import media from 'styled-media-query';
import { palette } from '@S/index';
import { ResponsiveFlexItemStyle } from '@S/responsive';

export const StyledFullMap = styled.div`

`;

// TODO: CSS 중복 처리
export const FlexContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${palette.WHITE20_NEWTRO};

  ${media.lessThan('medium')`
    flex-direction: column;
    justify-content: center;
  `};
`;

export const ImageFlexItem = styled.div`
  ${ResponsiveFlexItemStyle};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextFlexItem = styled.div`
  ${ResponsiveFlexItemStyle};

  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  ${media.lessThan('medium')`
    justify-content: center;
  `};
`;
