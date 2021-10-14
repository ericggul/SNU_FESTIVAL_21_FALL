import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { IoMdClose } from 'react-icons/all';
import media from 'styled-media-query';

const disappear = css`
  @keyframes disappear {
    from { opacity: 1; }
    to { opacity: 0; }
  } 
`;

export const StyledMissionCard = styled.div`
  position: relative;

  min-width: 260px;
  min-height: 380px;
  border-radius: .5rem;

  ${media.greaterThan('medium')`
    width: 450px;
    height: 450px;
  `}
  
  ${disappear};
  animation: disappear 1s linear reverse backwards;
  ${FlexCenterStyle};
  background: ${({ theme }) => theme.palette.GUIDE_PURPLE};
  box-shadow: 0 0 10rem .5rem ${({ theme }) => theme.palette.GUIDE_SHADOW_PURPLE};
`;

export const CloseButton = styled.div`
  z-index: ${({ theme }) => theme.zIndex.fullScreen + 1};
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const CloseIcon = styled(IoMdClose)`
  width: 30px;
  height: 30px;
  color: white;
`;

export const Contents = styled.div`
  ${FlexCenterStyle};
  margin-top: auto;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.palette.GUIDE_TEXT_PURPLE};
`;

export const Header = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: .7rem;
  text-shadow: 0 0 .1rem ${({ theme }) => theme.palette.GUIDE_TEXT_PURPLE};
`;

export const Text = styled.div`
  ${FlexCenterStyle};
  font-size: .9rem;
  font-weight: normal;
`;

export const ButtonContainer = styled.div`
  ${FlexCenterStyle};
  margin: .5rem 0;
`;

export const Button = styled.div`
  margin: 1rem;
  margin-top: 1.3rem;
  margin-bottom: 1.5rem;
  width: 5rem;
  padding: .4rem 1.2rem;
  border-radius: .3rem;
  font-weight: 500;
  color: white;
  background: ${({ theme }) => theme.palette.SOFTPASTEL_PURPLE};
  box-shadow: 0 .3rem .6rem rgba(0, 0, 0, .16);
`;
