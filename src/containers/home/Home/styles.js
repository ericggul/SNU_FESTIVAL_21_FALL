import styled, { css } from 'styled-components';
import '@/static/font/font.css';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';
import { FluctuationAnimation, VibrateAnimation } from '@S/responsive/animation';

export const StyledHome = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  background-color: ${({ theme }) => theme.palette.HOME_PURPLE};
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
  top: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.palette.HOME_PURPLE};
`;

export const Background = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
  pointer-events: none;
`;

export const Landmark = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
  ${props => props.right && css`right: ${props.right}px`};
  ${props => props.bottom && css`bottom: ${props.bottom}px`};
  
  ${HoverStyle};
  &:hover {
    transform: scale(1.04);
  }
  
`;
