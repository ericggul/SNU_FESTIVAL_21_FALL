import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const MapContainer = styled.div`
  ${FlexCenterStyle};
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
`;
