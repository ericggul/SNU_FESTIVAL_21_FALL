import styled, { css } from 'styled-components';
import { HoverStyle } from '@S/responsive/mouse';
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
