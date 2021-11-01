import styled from 'styled-components';
import media from 'styled-media-query';
import { FlexCenterStyle } from '@S/responsive/display';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const MobileBody = styled(motion.div)`
  z-index: 2;
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
  text-alingn: ccenter;
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
  z-index: 5;
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
  margin: 1rem 0;
  ${FlexCenterStyle};
`;

export const AbsoluteImage = styled.img`
  height: auto;
  width: 100%;
  max-width: 700px;
  margin: auto;
  left: 0;
  right: 0;
`;

export const Text = styled.div`
  margin: .4rem;
  margin-top: .8rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
`;
