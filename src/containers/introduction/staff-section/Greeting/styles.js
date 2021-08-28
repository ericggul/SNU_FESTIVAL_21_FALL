import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledGreeting = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 110px;
`;

export const TopText = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.WHITE};
  
  & > div {
    margin: 0 1rem;
    border: 1px solid ${({ theme }) => theme.palette.WHITE};
    height: 0;
    width: 95px;
  }
`;

export const ContentText = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.WHITE};
  font-size: 2rem;
  margin: 0;
  padding: 0;
`;

export const PurpleText = styled.span`
  margin: 0;
  padding: 0;
  color: transparent;
  -webkit-text-stroke: 1px ${({ theme }) => theme.palette.DARK_PURPLE}
`;
