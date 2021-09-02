import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  background: ${({ theme }) => theme.palette.DARK_PURPLE};
  z-index: -5;
`;

export const ImageTop = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
`;

export const ImageBottom = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
`;
