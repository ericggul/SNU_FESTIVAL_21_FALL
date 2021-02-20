import styled, { css } from 'styled-components';
import { GiSpeaker, GiSpeakerOff, IoIosArrowDown } from 'react-icons/all';

export const StyledPromoteVideo = styled.div`
  width: 100%;
  height: 100%;
`;

const ResponsiveIconStyleWithColor = css`
  width: 4rem;
  height: 4rem;
  color: ${({ theme }) => theme.palette.WHITE_NEWTRO};
`;

const BottomPosition = css`
  position: absolute;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.base};
`;

const PreventDrag = css`
  user-select: none;
`;

export const CenterLabel = styled.p`
  ${BottomPosition};
  ${PreventDrag};
  bottom: 50%;
  width: 100%;
  text-align: center;
  font-weight: lighter;
  
  color: ${({ theme }) => theme.palette.WHITE_NEWTRO};
  font-size: 2.5rem;
  opacity: 0.8;
`;

export const SoundButton = styled.div`
  ${BottomPosition};
  cursor: pointer;
`;

export const SpeakerIcon = styled(GiSpeaker)`
  ${ResponsiveIconStyleWithColor};
`;

export const SpeakerOffIcon = styled(GiSpeakerOff)`
  ${ResponsiveIconStyleWithColor};
`;

export const ArrowDownIcon = styled(IoIosArrowDown)`
  ${ResponsiveIconStyleWithColor};
`;

export const ArrowDownButtonWrapper = styled.div`
  ${BottomPosition};
  display: flex;

  width: 100%;
`;

export const ArrowDownButton = styled.div`
  margin: 0 auto;

  ${PreventDrag};
  cursor: pointer;
  
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.WHITE_NEWTRO};
`;
