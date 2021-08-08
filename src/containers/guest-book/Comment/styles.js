import styled from 'styled-components';
import { rgba } from 'polished';

export const StyledComment = styled.div`
  overflow: auto;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  padding: 0.5rem;
  box-sizing: border-box;
`;

export const CommentThread = styled.div`
  border-bottom: 1px solid ${({ theme }) => rgba(theme.palette.GRAY80, 0.2)};
  padding: 0.4rem;
  box-sizing: border-box;
  
  &:first-child {
    border-top: 1px solid ${({ theme }) => rgba(theme.palette.GRAY80, 0.2)};
  }
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 5px;
`;

export const Id = styled.div`
  color: ${({ theme }) => theme.palette.GRAY80};
  font-size: 1rem;
  font-weight: bold;
`;

export const Delete = styled.div`
  margin-right: 0.6rem;
  color: ${({ theme }) => theme.palette.GRAY80};
  font-size: 0.6rem;
  cursor: pointer;
`;

export const LikeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

export const ContentRow = styled.div`
  word-break: break-all;
  word-wrap: break-word;
`;

export const BestLabel = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 1.2rem;
  margin-right: 5px;

  border-radius: 1rem;
  color: white;
  background-color: ${({ theme }) => theme.palette.PURPLE50};
  font-size: 0.8rem;

  @keyframes shine{
    0%{
      filter: brightness(1);
    }
    100%{
      filter: brightness(1.1);
    }
  }
  animation: shine ${Math.random() * 2 + 1}s infinite alternate;
`;

export const Content = styled.span`
  color: ${({ theme }) => theme.palette.GRAY80};
  font-size: 1rem;
  line-height: 1.5;
`;

export const LastRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.6rem;
  color: ${({ theme }) => theme.palette.GRAY80};
  font-size: 0.6rem;
`;

export const Time = styled.div`
  margin-right: 0.5rem;
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.PURPLE50};
  font-size: 0.9rem;
  transform: scale(0.8);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
