import styled from 'styled-components';

export const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.windowWidth * 1.2}px;
  height: ${({ theme }) => theme.windowHeight * 1.2}px;
  object-fit: cover;
  background: transparent;
`;
