import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const MapContainer = styled.div`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export const Map = styled.img`
  position: absolute;
  ${props => props.top && css`top: ${props.top}px`};
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Pointer = styled.img`
  position: absolute;
  height: auto;
  cursor: pointer;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
  ${props => props.width && css`width: ${props.width}px`};

  @keyframes zigzag {
    0% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(-.05rem, .05rem) rotate(-3deg); }
    66% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(.1rem, .1rem) rotate(10deg); }
  }

  ${props => props.animate && 'animation: zigzag 1s infinite alternate;'};
`;

export const Image = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.width && css`width: ${props.width}px`};
  height: ${({ height }) => height}px;
  margin: auto;
  height: auto;
  object-fit: cover;
  
`;
