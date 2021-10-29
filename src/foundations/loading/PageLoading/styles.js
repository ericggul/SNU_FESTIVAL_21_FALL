import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledPageLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${({ theme }) => theme.windowHeight}px;
  z-index: ${({ theme }) => theme.zIndex.loading - 2};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2e1055;

`;

export const Background = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0px;
  object-fit: cover;
  object-position: center bottom;
  z-index: ${({ theme }) => theme.zIndex.loading - 1};
`;

export const Animation = styled.div`
  max-width: 200px;
  max-height: 200px;
  width: 50vw;
  height: 50vw;
  ${FlexCenterStyle};
  z-index: ${({ theme }) => theme.zIndex.loading};
`;

export const Message = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  z-index: ${({ theme }) => theme.zIndex.loading};
`;

export const Img = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  ${props => props.top && css`top: ${props.top - 65}px`};
  ${props => props.left && css`left: ${props.left}px`};
`;

export const ConstellationConatiner = styled.div`
  pointer-events: none;
  position: absolute;
  ${FlexCenterStyle};
  width: calc(min(100%, 500px));
  // margin-left: calc(max(0px, ${({ theme }) => theme.windowWidth / 2 - 250}px));
  ${({ isMobile }) => isMobile && 'margin-left: 0px;'}
  height: ${({ theme }) => theme.windowHeight - 65}px;
  z-index: ${({ theme }) => theme.zIndex.loading};
`;

export const ConstellationImage = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  ${props => props.top && css`top: ${props.top - 65}px`};
  ${props => props.left && css`left: ${props.left}px`};
  ${props => props.angle && css`transform: rotate(${props.angle}deg);`}
  height: auto;

  @keyframes rotate{
    0%{transform: rotate(3deg);}
    100%{transform: rotate(-7deg);}
  }

  @keyframes filter{
    0%{ filter: hue-rotate(0deg) brightness(1.6);}
    100%{ filter: hue-rotate(30deg) brightness(10);}
  }

  @keyframes simple{
    0%{ opacity: 0; transform: rotate(0deg);}
    20%{ opacity: 1; transform: rotate(2deg);}
    100%{ opacity: 1; }
  }

  filter: drop-shadow(0 0 10px white);
  animation: simple 1s infinite linear alternate backwards;
  animation-delay: ${props => props.delay}s;
`;
