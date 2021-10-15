import styled from 'styled-components';

export const StyledGuestBook = styled.div`
  height: ${({ theme }) => theme.windowHeight}px;
  background: ${({ theme }) => theme.palette.DARK_PURPLE};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
`;

export const StampDescriptionBoxWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

export const WriteBoxWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => (theme.windowHeight - 65) * (1 / 4)}px;
  min-height: 15rem;
  padding: 1rem 2rem;
  box-sizing: border-box;
`;

export const CommentsWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => (
    (theme.windowHeight - 65) * (3 / 4)
  )}px;
  padding: 0.5rem 2rem;
  box-sizing: border-box;
`;
