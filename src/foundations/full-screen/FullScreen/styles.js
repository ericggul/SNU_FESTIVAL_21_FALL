import styled, { css } from 'styled-components';
import { IoMdClose } from 'react-icons/all';

export const StyledFullScreen = styled.div`
  z-index: ${({ theme }) => theme.zIndex.fullScreen};
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  
  background-color: ${props => props.backgroundColor};
  width: 100vw;
  height: 100%;
  opacity: 0;
  pointer-events: none;

  transition: opacity 1s cubic-bezier(0.42, 0, 1, 0.49);

  ${({ isFullScreen }) => isFullScreen && `
    opacity: 1;
    pointer-events: auto;
  `};
  ${({ isFullScreen }) => !isFullScreen && `
    opacity: 0;
    pointer-events: none;
  `};
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
