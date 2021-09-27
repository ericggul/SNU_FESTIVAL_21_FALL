import styled from 'styled-components';
import media from 'styled-media-query';
import { FlexCenterStyle } from '@S/responsive/display';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.palette.DARK_PURPLE};
`;

export const MobileBody = styled.div`
  width: 100%;
  box-sizing: border-box;

  ${FlexCenterStyle};
  flex-direction: column;

`;

export const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  justify-content: space-between;
  margin: 2rem;
`;

export const TitleDate = styled.div`
   margin-top: 2rem;
`;

export const IconBubble = styled.div`
  ${FlexCenterStyle};
  flex-direction: row;
  margin: 2rem 0;
`;

export const Icon = styled.div`
  width: calc(min(33vw, 200px));
  height: auto;
  margin-right: 2rem;
  cursor: pointer;

  @keyframes rotation {
    to { transform: rotate(-3deg); }
    from { transform: rotate(3deg); }
  }

  animation: rotation 1.1s infinite linear alternate;
`;

export const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.windowHeight / 1.1}px;

`;

export const Body = styled.div`
  width: 100%;
  max-width: 1200px;
  max-height: 600px;
  height: 100%;
  margin: auto;
  
  padding: 2rem;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  
  & > div {
    width: 47%;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem 0 1.5rem;
  
  ${media.greaterThan('large')`
    width: 47%;
    height: auto;
    margin: 0;
  `};
`;
