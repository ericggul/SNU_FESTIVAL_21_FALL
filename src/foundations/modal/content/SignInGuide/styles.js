import styled from 'styled-components';
import { rgba } from 'polished';
import { FlexCenterStyle } from '@S/responsive/display';
import { IoMdClose } from 'react-icons/all';

export const SignInGuideBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 25rem;
  min-height: 24rem;
  
  background-color: white;
  border-radius: .5rem;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .16);

  ${FlexCenterStyle};
  text-align: center;

  @keyframes show{
    from{opacity: 0;}
    to{opacity: 1;}
  }

  animation: show 1.5s;
`;

export const Image = styled.img`
  width: 16rem;
  height: auto;
`;

export const Header = styled.div`
  font-weight: 500;
  width: 15rem;
  font-size: 1.5rem;
  margin: .5rem;
  margin-top: 0;
  line-height: 1.3;
  color: #4f30b3;
`;
export const Subheader = styled.div`
  color: #7f68c7;
  font-size: .9rem;
  // margin: .2rem;
  font-weight: 500;
`;

export const Button = styled.div`
  background: #a494d9;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  padding: .5rem 2.5rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 2rem;
  box-shadow: 0 .3rem .6rem 0 rgba(0, 0, 0, .16);
  cursor: pointer;
`;

export const CloseButton = styled.div`
  z-index: ${({ theme }) => theme.zIndex.fullScreen + 1};
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export const CloseIcon = styled(IoMdClose)`
  width: 2.5rem;
  height: 2.5rem;
  color: #a494d9;
`;
