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

  border-radius: .5rem;
  min-width: 264px;

  @media (orientation: landscape) {
    min-width: 25rem;
    max-width: 30rem;
    min-height: 20rem;
  }
  
  @media (orientation: portrait) {
    min-width: 25rem;
    max-width: 30rem;
    height: 30rem;
  }
  
  ${disappear};
  animation: disappear 2.5s linear reverse backwards;
  ${FlexCenterStyle};
  flex-direction: column;
  background: ${({ theme }) => theme.palette.CREAM_PURPLE};
  box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, .16);
`;

export const CloseButton = styled.div`
  z-index: ${({ theme }) => theme.zIndex.fullScreen + 2};
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

export const Background = styled.img`
  position: absolute;
  width: 23rem;
  height: auto;
  margin: auto;
  left: 0;
  right: 0;
  top: 1rem;
`;

export const Contents = styled.div`
  display: flex;
  margin-top: 0;
  margin-bottom: auto;
  flex-direction: column;
  text-align: center;
  color: white;
  z-index: ${({ theme }) => theme.zIndex.fullScreen + 1};
`;

export const Image = styled.img`
  width: 16rem;
  height: auto;
  margin: auto;
  left: 0;
  right: 0;
  margin-top: 3rem;

  @keyframes fun{
  }
  animation: fun 5s infinite;
`;

export const Header = styled.div`
  
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 .3rem .6rem rgba(255, 255, 255, .25);
`;

export const SubHeader = styled.div`
margin-top: 2.2rem;
  font-size: 1rem;
  font-weight: 300;
  font-type: italic;
  color: transparent;
  text-shadow: 0 0 .1rem ${({ theme }) => theme.palette.HOME_PURPLE};
`;

export const PinkText = styled.span`
  color: #cf75ea;

`;

export const Text = styled.div`
  ${FlexCenterStyle};
  font-size: .9rem;
  font-weight: 300;
  color: white;
`;

export const Share = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  text-align: left;
  margin-left: 1rem;
  margin-right: auto;

  ${({ theme }) => theme.windowWidth > 768 && 'margin-top: 2rem;'}
`;

export const ShareText = styled.div`
  font-size: .9rem;
  font-weight: 300;
  color: #896fdf;

  &:nth-of-type(1){
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const KakaoShare = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  right: 3rem;
  bottom: 3rem;

  cursor: pointer;
  ${({ theme }) => theme.windowWidth > 768
  && 'bottom: 2rem; right: 2rem;'}
`;
