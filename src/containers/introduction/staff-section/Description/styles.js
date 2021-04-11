import styled from 'styled-components';

export const StyledDescription = styled.div`
  max-width: 550px;
  width: 100%;
  margin: 4rem 0;
  
  text-align: right;
  align-self: flex-end;
  
  color: ${({ theme }) => theme.palette.GRAY90};
  line-height: 2;
  word-break: keep-all;
  font-weight: bold;
`;

export const PurpleText = styled.span`
  color: ${({ theme }) => theme.palette.PURPLE50};
`;
