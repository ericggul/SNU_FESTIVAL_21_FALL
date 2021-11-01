import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledPageLoading = styled.div`
  display: flex;
  width: 100vw;
  min-height: ${({ theme }) => theme.windowHeight}px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @keyframes appear{
    from{opacity: 0; filter: blur(4rem);}
    to{opacity: 1; filter: blur(0);}
  }

  animation: appear 3s;
`;

export const Body = styled.div`
  ${FlexCenterStyle};
  min-height: ${({ theme }) => theme.windowHeight - 65}px;
  flex-direction: column;
`;

export const Background = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0px;
  object-fit: cover;
  object-position: center bottom;
  z-index: -1;
  background: #2e1055;
`;

export const Text = styled.div`
  color: white;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  word-break: keep-all;
  margin-bottom: 2rem;
`;

export const Emph = styled.span`
  font-weight: 700;
`;

export const Contents = styled.div`
  ${FlexCenterStyle};
  color: white;
  width: ${({ theme }) => (theme.windowWidth < 768 ? '75vw' : '576px')};
  height:  ${({ theme }) => (theme.windowWidth < 768 ? '88vw' : '675px')};
  margin: 2rem;
  background: ${({ theme }) => theme.palette.CREAM_PURPLE};
  // border-radius: .5rem;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  width: 90%;
  height: auto;
  margin: auto;
  top: ${({ theme }) => (theme.windowWidth < 768 ? '3.75vw' : '28.8px')};
  left: 0;
  right: 0;
`;

export const SmallText = styled.img`
  position: absolute;
  width: 80%;
  height: auto;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;

`;

export const Save = styled.div`
  ${FlexCenterStyle};
  margin-top: 4rem;
  margin-bottom: 3rem;
  padding: .8rem 2rem;
  font-size: 1.3rem;
  border-radius: .5rem;
  color: white;
  background: black;
  border: 1px solid rgba(255, 255, 255, .5);
  
`;
