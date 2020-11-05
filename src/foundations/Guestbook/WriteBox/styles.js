import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledContainer = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  .toast {
    color: black;
    text-align: center;
  }
`;

export const StyledWriteBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
`;

export const IdPassword = styled.div`
  display: flex;
`;

export const InputBox = styled.input`
  width: 10rem;
  padding: 2px 7px;
  margin: 5px;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #757575;
  border-radius: 0;
  outline: 0;
  transition: border .15s ease-in-out, padding .15s ease-in-out;
  &:focus{
    padding: 2px 7px 0;
    border-bottom: 3px solid #fddde6;
  }
`;

export const TextArea = styled.textarea`
  height: 5rem;
  padding: 2px 7px 0;
  margin: 5px;
  resize: none;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #757575;
  border-radius: 0;
  outline: 0;
  transition: border .15s ease-in-out, padding .15s ease-in-out;
  &:focus{
    padding: 2px 7px 0;
    border-bottom: 3px solid #fddde6;
  }
`;

export const Submit = styled.button`
  margin: 0 5px;
  border: 2px solid #fddde6;
  border-radius: 8px;
  outline: 0;
  background-color: white;
  cursor: pointer;
  font-weight: bold;
  align-self: flex-end;
  transition: .15s;
  &:hover{
    background-color: #fddde6;
  }
`;
