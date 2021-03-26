import styled from 'styled-components';
import { rgba } from 'polished';

export const StyledPageLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${({ theme }) => theme.windowHeight}px;
  z-index: ${({ theme }) => theme.zIndex.loading};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${rgba('purple', 0.1)};
`;

export const Message = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;