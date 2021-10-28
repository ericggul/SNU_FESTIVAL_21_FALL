import styled, { keyframes } from 'styled-components';
import { FlexCenterStyle, CenterImageStyle } from '@S/responsive/display';

const appear = keyframes`
  from{ opacity: 0; }
  to{ opacity: 1; }
`;

export const StyledComment = styled.div`
  overflow: auto;

  display: flex;
  flex-direction: column;
  width: calc(100% + 2rem);
  height: 100%;
  margin-left: -1rem;
  padding: 1rem;
  box-sizing: border-box;
`;

export const CommentThread = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.PASTEL_PURPLE};
  padding: 0.4rem 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.palette.PASTEL_PURPLE};
  }
  
  opacity: 0;
  animation: ${appear} 2s forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

export const CommentContent = styled.div`
  width: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.WHITE};
`;

export const FirstRow = styled.div`
  display: flex;
`;

export const BestLabel = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 1rem;
  margin-left: 1rem;

  color: white;
  background-color: ${({ theme }) => theme.palette.PASTEL_PURPLE};
  font-size: .5rem;

`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Id = styled.div`
  font-size: 1rem;
`;

export const ContentRow = styled.div`
  margin-top: 0.2rem;
  word-break: break-all;
  word-wrap: break-word;
`;

export const Content = styled.span`

  font-size: 1rem;
  line-height: 1.5;
`;

export const LastRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
  height: 1.5rem;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  
  font-size: 0.6rem;
`;

export const Time = styled.div`
  margin-right: 0.6rem;
  font-size: 0.6rem;
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  font-size: 0.9rem;
`;

export const HeartImage1 = styled.img`
  width: 0.5rem;
  height: 0.5rem;
`;

export const LikesText = styled.div`
  font-weight: 200;
  font-size: 0.5rem;
  margin-left: 0.2rem;
`;

export const LikeBox = styled.div`
  right: 0;
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const Delete = styled.div`

  width: 1.1rem;
  text-align: center;
  margin-bottom: 1rem;
  height: .6rem;
  font-size: 0.6rem;
  cursor: pointer;

`;

export const LikeButton = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  width: 1.1rem;
  height: auto;
  border-radius: .6rem;
  cursor: pointer;
`;

export const HeartImage2 = styled.img`
  ${CenterImageStyle};
  width: 64%;
  height: auto;
`;
