import styled, { css } from 'styled-components';

export const Image = styled.img`
  width: 100%;
  box-sizing: border-box;
  height: ${({ isLoading }) => (isLoading ? 0 : '100%')};
  ${props => props.objectFit && css`
    object-fit: ${props.objectFit};
  `}
  ${props => props.borderRadius && css`
    border-radius: ${props.borderRadius};
  `}
  border: 1rem solid ${({ theme }) => theme.palette.BORDER_PURPLE};
  box-shadow: 
      0 0 2px ${({ theme }) => theme.palette.BORDER_PURPLE},
      0 0 5px ${({ theme }) => theme.palette.BORDER_PURPLE},
      0 0 2rem ${({ theme }) => theme.palette.BORDER_PURPLE};

`;

export const Skeleton = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${props => props.circle && css`
    border-radius: 50%;
  `};
  ${props => props.borderRadius && css`
    border-radius: ${props.borderRadius};
  `}
`;
