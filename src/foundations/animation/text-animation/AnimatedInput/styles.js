import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const InputStyle = css`
  margin: 5px 0;
  border: 0;
  border-radius: 0;
  outline: 0;

  color: ${({ theme }) => theme.palette.PASTEL_PURPLE};
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  ${InputStyle};

  resize: none;
  flex: 1;
  border-radius: 5px;
  background-color: ${({ theme }) => rgba(theme.palette.PASTEL_PURPLE, 0.85)};
  padding: 5px 7px;
  color: ${({ theme }) => theme.palette.WHITE};

  &::placeholder {
    padding: 5px 7px;
    font-weight: 300;
    color: ${({ theme }) => theme.palette.WHITE};
  }
`;
