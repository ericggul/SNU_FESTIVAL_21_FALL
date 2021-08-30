import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from{ opacity: 0; }
  to{ opacity: 1; }
`;

export const CommentsNumber = styled.div`
    color: white;
    margin-bottom: 0.5rem;
    opacity: 0;
    animation: ${appear} 1s forwards;
    animation-delay: 1s;
`;

export const CommentImage = styled.img`
  max-width: 2rem;
  max-height: 2rem;

  margin-right: 0.9rem;
`;
