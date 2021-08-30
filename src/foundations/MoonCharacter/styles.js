import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  margin-right: 0.2rem;
`;

export const ProfileImage = styled.img`
  position: absolute;
  max-width: 2rem;
  max-height: 2rem;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-left: 0;
 
  cursor: pointer;
  perspective: 100px;
  ${({ boxShadow }) => boxShadow && 'filter: drop-shadow(0 0 0.4rem #feee96);'}

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
