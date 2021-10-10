import styled, { css } from 'styled-components';
import { HoverStyle } from '@S/responsive/mouse';
import { FlexCenterStyle } from '@S/responsive/display';
import { FluctuationAnimation, VibrateAnimation } from '@S/responsive/animation';

export const StyledMobileHome = styled.div`
  position: relative;
  width: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.palette.HOME_PURPLE};
  overflow: hidden;
`;
