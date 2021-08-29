import styled, { keyframes } from 'styled-components';
import { CenterImageStyle } from '@S/responsive/display';

const appear = keyframes`
  from{ opacity: 0; }
  to{ opacity: 1; }
`;

export const CommentsNumber = styled.div`
  color: white;
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: ${appear} 1s forwards;
  animation-delay: 1s;
`;

export const CommentImage = styled.img`
  width: auto;
  height: 0.8rem;
  margin-right: 0.5rem;
`;

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
  border-top: 1px solid ${({ theme }) => theme.palette.PASTEL_PURPLE};
  padding: 0.4rem;
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

export const ImageWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  margin-right: 5px;
`;

export const ProfileImage = styled.img`
  position: absolute;
  max-width: 2rem;
  max-height: 2rem;
  top: 0;
  bottom: 0;
  margin: auto;
 
  cursor: pointer;
  perspective: 100px;
  filter: drop-shadow(0 0 0.5rem ${({ theme }) => theme.palette.STAR_YELLOW});

  @keyframes animateCharacter1{
    from{transform: rotateY(0deg)}
    to{transform: rotateY(720deg)}
  }

  @keyframes animateCharacter2{
    0%{filter: brightness(1)}
    50%{filter: brightness(1.4)}
  }

  @keyframes animateCharacter3{
    0%{transform: rotateX(0deg)}
    50%{transform: rotateX(720deg)}
  }

  @keyframes animateCharacter4{
    from{transform: rotateY(0deg)}
    to{transform: rotateY(720deg)}
  }

  @keyframes animateCharacter5{
    from{transform: rotate(0)}
    to{transform: rotate(1080deg)}
  }

  animation-name: ${props => (props.animate === 0 ? '' : `animateCharacter${props.animate}`)};
  animation-duration: 2s;
`;

export const CommentContent = styled.div`
  width: 100%;
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

  // border-radius: 1rem;
  color: white;
  background-color: ${({ theme }) => theme.palette.PASTEL_PURPLE};
  font-size: 5px;

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
`;

export const Delete = styled.div`
  margin-right: 0.6rem;

  font-size: 0.6rem;
  cursor: pointer;
`;

export const LikeButton = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  width: 1.1rem;
  height: 1.1rem;
  border: 0.3px solid #aaa;
  border-radius: 50%;
  cursor: pointer;
`;

export const HeartImage2 = styled.img`
  ${CenterImageStyle};
  width: 60%;
  height: 60%;
`;
