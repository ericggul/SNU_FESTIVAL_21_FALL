import styled, { css } from 'styled-components';
import { IoMdClose } from 'react-icons/all';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledFullScreen = styled.div`
  z-index: ${({ theme }) => theme.zIndex.fullScreen};
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  
  background-color: ${props => props.backgroundColor};
  width: 0;
  height: 0;
  border-radius: 100%;
  
  transform: scale(1.8);
  transition: all 0.2s ease-out;

  ${props => props.isFullScreen && css`
    width: 100vw;
    height: 100%;
    border-radius: 0;
    
    transform: scale(1);
    transition: width 0.5s ease-out, height 0.6s ease-out, border-radius 0.9s ease, transform 1s ease;
  `};
`;

export const Top = styled.div`
  position: absolute;
  ${FlexCenterStyle};
  top: 0;
  width: 100%;
  height: 65px;
`;

export const Description = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  color: white;
  margin: auto;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CloseButton = styled.div`
  z-index: ${({ theme }) => theme.zIndex.fullScreen + 1};
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const CloseIcon = styled(IoMdClose)`
  width: 40px;
  height: 40px;
  color: white;
`;
