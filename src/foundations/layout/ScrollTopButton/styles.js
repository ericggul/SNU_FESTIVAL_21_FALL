import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledScrollTopButton = styled.div`
  ${FlexCenterStyle};
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  
  width: 3.75rem;
  height: 3.75rem;
  cursor: pointer;
  border-radius: 50%;
  
  z-index: ${({ theme }) => theme.zIndex.topButton};
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transition: opacity 0.5s;
  // opacity: ${({ scroll }) => (scroll > 300 ? 1 : 0)};
  transform: rotate(${({ scroll }) => (scroll) / 5}deg);
`;
