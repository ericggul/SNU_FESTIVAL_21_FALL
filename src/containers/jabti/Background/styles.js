import styled from 'styled-components';

export const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.windowWidth * 1.2}px;
  height: ${({ theme }) => theme.windowHeight * 1.2}px;
  background: ${({ theme }) => theme.palette.DARK_PURPLE};
  z-index: -5;
`;
