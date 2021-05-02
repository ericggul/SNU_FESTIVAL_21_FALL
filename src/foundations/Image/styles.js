import styled, { css } from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: ${({ isLoading }) => (isLoading ? 0 : '100%')};
  ${props => props.objectFit && css`
    object-fit: ${props.objectFit};
  `}
  ${props => props.borderRadius && css`
    border-radius: ${props.borderRadius};
  `}
`;

export const Skeleton = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${props => props.circle && css`
    border-radius: 50%;
  `};
`;
