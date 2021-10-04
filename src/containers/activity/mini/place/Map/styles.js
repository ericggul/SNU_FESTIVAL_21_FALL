import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const MapContainer = styled.div`
  ${FlexCenterStyle};
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin-top: ${({ theme }) => theme.windowHeight * 0.2}px;
`;

export const Map = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
`;
