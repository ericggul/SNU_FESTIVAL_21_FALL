import styled from 'styled-components';

export const StyledGuestBook = styled.div`
  height: ${({ theme }) => theme.windowHeight}px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  min-height: 65px;
  background-color: ${({ theme }) => theme.palette.PURPLE50};
  
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const StampDescriptionBoxWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

export const WriteBoxWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => (theme.windowHeight - 170) * (1 / 3)}px; // NOTE: header 와 stamp description 의 height 합이 165px
  min-height: 150px;
  padding: 1rem 2rem;
  box-sizing: border-box;
`;

export const CommentsWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => (
    theme.windowHeight > 620
      ? (theme.windowHeight - 170) * (2 / 3) // NOTE: header 와 stamp description 의 height 합이 165px
      : theme.windowHeight - 320 // NOTE: WriteBox 의 min-height 가 150px
  )}px;
  padding: 0.5rem 2rem;
  box-sizing: border-box;
`;
