import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledPlace = styled.div`
  min-height: ${({ theme }) => theme.windowHeight}px;
  width: ${({ theme }) => theme.windowWidth}px;
  overflow-y: hidden;

  background-image: linear-gradient(to top, 
    ${({ theme }) => theme.palette.PLACE_MINT1}, 
    ${({ theme }) => theme.palette.PLACE_MINT2} 50%, 
    ${({ theme }) => theme.palette.PLACE_MINT1} 100%);
`;

export const Container = styled.div`
  ${FlexCenterStyle};
  ${props => props.isMobile && 'flex-direction: column;'};
  height: ${({ theme }) => theme.windowHeight - 65}px;
  width: 100%;
`;

export const Text = styled.div`
  position: absolute;
  top: 10vh;
  ${({ theme }) => theme.windowWidth < 768 && 'top: 20vh;'}
  width: 70vw;
  max-width: 40rem;
  text-align: center;
  word-break: keep-all;
  font-size: .9rem;
  font-color: #888;
  font-weight: 300;

  @keyframes reveal{
    from{opacity: 0; filter: blur(10px);}
    to{opacity: 1; filter: blur(0px);}
  }
  animation: reveal 1s backwards;
  animation-delay: 1.5s;
`;

export const EmphText = styled.span`
  word-break: keep-all;
  font-size: .9rem;
  font-weight: 600;
`;

export const TextBottom = styled.div`
  position: absolute;
  bottom: 3vh;
  ${({ theme }) => theme.windowWidth < 768 && 'bottom: 12vh;'}
  ${({ theme }) => theme.windowWidth < 400 && 'bottom: 18vh;'}
  width: 70vw;
  max-width: 40rem;
  text-align: center;
  word-break: keep-all;
  font-size: .9rem;
  font-color: #aaa;
  font-weight: 300;

  @keyframes reveal{
    from{opacity: 0; filter: blur(10px);}
    to{opacity: 1; filter: blur(0px);}
  }
  animation: reveal 1s backwards;
  animation-delay: 2.5s;
`;
