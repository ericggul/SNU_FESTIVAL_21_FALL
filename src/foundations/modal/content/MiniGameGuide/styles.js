import styled from 'styled-components';
import { rgba } from 'polished';
import { IoMdClose } from 'react-icons/all';

export const MiniGameGuideBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 65%;
  min-width: 264px;
  height: 100%;
  
  background: linear-gradient(#e5ddff, #a494d9);
  border-radius: .5rem;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .16);
  
  padding: 5px 8px 6px 7px;
  box-sizing: border-box;
  border-radius: 1rem;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  
  padding: 2rem;
  box-sizing: border-box;
  
  color: black;

`;

export const Text = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
  word-break: keep-all;
  line-height: 1.5;
`;

export const Row = styled.div`
  display: flex;
  margin: .2rem 0;
`;

export const Header = styled.div`
  width: 20%;
  
  font-size: 1.2rem;
  font-weight: 600;
  color: #211549;
`;

export const Divider = styled.div`
  font-size: 1.2rem;
  margin-right: .5rem;
  color: #14122D;
`;

export const Body = styled.div`
  width: 80%;
  font-size: .9rem;
  font-weight: 300;
  margin-top: .3rem;
  color: #260f63;
`;

export const SemiText = styled.div`
  font-size: .6rem;
  font-weight: 300;
  margin-top: 1.5rem;
  color: #260f63;
`;

export const CloseButton = styled.div`
  z-index: ${({ theme }) => theme.zIndex.fullScreen + 2};
  position: absolute;
  top: .5rem;
  right: .5rem;
  cursor: pointer;
`;

export const CloseIcon = styled(IoMdClose)`
  width: 2rem;
  height: 2rem;
  color: white;
`;
