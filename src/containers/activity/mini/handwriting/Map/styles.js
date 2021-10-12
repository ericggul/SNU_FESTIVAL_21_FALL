import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { motion } from 'framer-motion';

export const MapContainer = styled.div`
  ${FlexCenterStyle};
  position: relative;
  width:${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin-top: -${({ height }) => height * 0.11}px;
  @keyframes appear{
    from{opacity: 0;}
    to{opacity: 1;}
  }
  animation: appear 2s linear backwards;
  animation-delay: 1s;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
`;

export const Object = styled.img`
  position: absolute;
  height: auto;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
  ${props => props.width && css`width: ${props.width}px`};

  @keyframes jump{
    97%{ transform: translateY(0)};
    99%{transform: translateY(-8px)};
    100%{transform: translateY(0)};
  }

  animation: jump 10s infinite;
  animation-delay: -${props => props.jump}s;
`;

export const Building = styled.img`
  position: absolute;
  height: auto;
  cursor: pointer;
  ${props => props.top && css`top: ${props.top}px`};
  ${props => props.left && css`left: ${props.left}px`};
  ${props => props.width && css`width: ${props.width}px`};
  @keyframes jump-bld{
    97%{ transform: translateY(0)};
    99%{transform: translateY(-30px)};
    100%{transform: translateY(0)};
  }

  animation: jump-bld 10s infinite;
  animation-delay: -${props => props.jump}s;
`;
