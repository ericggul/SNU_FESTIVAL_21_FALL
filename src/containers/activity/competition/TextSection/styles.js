import styled from 'styled-components';

export const TextSection = styled.div`
  color: ${({ theme }) => theme.palette.TEXT_GRAY};
`;

// export const PurpleText = styled.span`
//   color: ${({ theme }) => theme.palette.PURPLE50};
// `;

export const SubTitle = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  word-break: keep-all;
  text-align: center;
`;

export const Title = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  word-break: keep-all;
`;

export const Notice = styled.p`
  margin: 3rem 1.3rem;
  line-height: 1.5;
  word-break: keep-all;
`;

export const Evaluation = styled.p`
  margin-top: 5rem;
  text-align: center;
  margin-bottom: 0.8rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.TEXT_LIGHTGRAY};
  line-height: 1.5;
`;
