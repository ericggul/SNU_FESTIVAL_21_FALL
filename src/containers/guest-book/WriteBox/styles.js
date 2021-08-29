import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import media from 'styled-media-query';

export const StyledWriteBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InputStyle = css`
  margin: 5px 0;
  border: 0;
  border-radius: 0;
  outline: 0;

  color: ${({ theme }) => theme.palette.PASTEL_PURPLE};
  font-size: 1rem;
`;

export const InputBox = styled.input`
  ${InputStyle};
  min-height: 1.8rem;
  box-sizing: border-box;

  border-bottom: 1px solid ${({ theme }) => theme.palette.PASTEL_PURPLE};
  transition: border .15s ease-in-out, padding .15s ease-in-out;
  &:focus{
    border-bottom: 2px solid ${({ theme }) => theme.palette.PASTEL_PURPLE};
  }
  
  background-color: transparent;
  font-weight: normal;
  width: 6rem;
  padding: 0px 7px;
  
  &::placeholder {
    color: ${({ theme }) => theme.palette.LIGHT_PURPLE};
  }
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

export const Submit = styled.button`
  align-self: flex-end;
  margin: 5px 0;

  width: 4.5rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: 500;

  border: 1px solid transparent;
  border-radius: 16px;
  outline: 0;

  cursor: pointer;
  position: relative;

  color: ${({ theme }) => theme.palette.GRAY80};
  background-color: ${({ theme }) => rgba(theme.palette.LIGHT_PURPLE, 1)};
  box-shadow: 
    0 0 2px ${({ theme }) => theme.palette.LIGHT_PURPLE},
    0 0 5px ${({ theme }) => theme.palette.LIGHT_PURPLE};

  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    box-shadow: 
      0 0 2px ${({ theme }) => theme.palette.LIGHT_PURPLE},
      0 0 5px ${({ theme }) => theme.palette.LIGHT_PURPLE},
      0 0 10px ${({ theme }) => theme.palette.LIGHT_PURPLE},
      0 0 15px ${({ theme }) => theme.palette.LIGHT_PURPLE};
    opacity: 0;
    @keyframes opacity{
      from{ opacity: 0; }
      to{opacity: 1; }
    }
    animation: opacity 2s infinite alternate;
  }
  transition: color, background-color, .15s;
  &:hover{
    color: ${({ theme }) => theme.palette.PURPLE50};
    &:after{
      box-shadow: 
      0 0 2px ${({ theme }) => theme.palette.LIGHT_PURPLE},
      0 0 5px ${({ theme }) => theme.palette.LIGHT_PURPLE},
      0 0 10px ${({ theme }) => theme.palette.LIGHT_PURPLE},
      0 0 15px ${({ theme }) => theme.palette.LIGHT_PURPLE},
      0 0 20px ${({ theme }) => theme.palette.LIGHT_PURPLE},
      0 0 25px ${({ theme }) => theme.palette.LIGHT_PURPLE};
    }
  }
  
  ${media.lessThan('medium')`
    width: 5rem;
    height: 2.5rem;
    font-size: 1rem;
  `};
`;
