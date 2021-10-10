import styled, { css } from 'styled-components';
import '@/static/font/font.css';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';
import { FluctuationAnimation, VibrateAnimation } from '@S/responsive/animation';

export const StyledHome = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  background-color: ${({ theme }) => theme.palette.HOME_PURPLE2};
  ${FlexCenterStyle};
  min-height: ${({ height }) => height}px;
  
  z-index: ${({ theme }) => theme.zIndex.base};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  top: 150px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.palette.HOME_PURPLE2};
`;
