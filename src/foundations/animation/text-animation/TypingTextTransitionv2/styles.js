import styled from 'styled-components';

export const StyledTypingTextTransition = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Text = styled.p`
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  position: absolute;
  margin: 0;
  z-index: ${({ theme }) => theme.zIndex.base};

  span {
    position: absolute;
  }
`;

export const Offscreentext = styled.p`
  width: 100%;
  transform: translateY(-50%);
  display: block;
  position: absolute;
  margin: 0;
  text-align: center;
  top: -9999px;
`;
