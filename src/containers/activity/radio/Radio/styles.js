import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';
import media from 'styled-media-query';

export const StyledRadio = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  align-items: center;
`;

export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  object-fit: cover;
  object-position: center bottom;
`;

export const Image = styled.img`
  position: absolute;
  width: 50%;
`;

export const Texts = styled.div`

`;
