import styled, { css } from 'styled-components';

const ContainerCommon = css`
  position: fixed;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: 50px;
  height: 50px;
  transform: translate(-25px, -25px);
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.light};
`;

const CircleCommon = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0; 
  bottom: 0;
  margin: auto;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-radius: 50%;
`;

const appearLight = css`
  @keyframes appearLight{
    0%{opacity: 0;}
    100%{opacity: 1;}
  }
  animation: appearLight 3s linear alternate infinite backwards;
`;

const appearSudden = css`
  @keyframes appear-sudden{
    0%{opacity: 0;}
    70%{opacity: 0;}
    100%{opacity: 1;}
  }
`;

export const ContainerSimple = styled.div`
  ${ContainerCommon};
  @keyframes lightMoveSimple{
    0%{
    }
    70%{
      transform: translate(0, -${({ theme }) => theme.windowHeight + 30}px) scale(5);
    }
    100%{
      transform: translate(
        ${({ theme, left }) => (theme.windowWidth > 768 ? theme.windowWidth / 2 - left - 25 : theme.windowWidth / 2 - left - 25)}px, 
        ${({ theme, top }) => (theme.windowWidth > 768 ? theme.windowHeight / 2 - top - 25 - 80 : theme.windowHeight / 2 - top - 25 - 50)}px)
      scale(2) rotate(360deg);
    }
  }

  ${({ animate }) => animate && 'animation: lightMoveSimple 3s forwards;'}
`;

export const Circle1 = styled.div`
  ${CircleCommon};
  background: transparent;
  box-shadow:
    inset 0 0 1rem white,
     0 0 1rem white, 
     0 0 1.5rem #EBB6E6, 
     0 0 2rem #D8BFD5, 
     0 0 3rem #EBDAE9, 
     0 0 4rem 2rem #CCC0CB, 
     0 0 6rem 2rem #E2BADE, 
     0 0 8rem 2rem #F4E3F3,
     0 0 10rem 2rem #EBC3E7;
`;
///
export const ContainerSimple2 = styled.div`
  ${ContainerCommon};
  @keyframes lightMoveSimple2{
    0%{
    }
    100%{
      transform: translate(
        ${({ theme, left }) => (theme.windowWidth > 768 ? theme.windowWidth / 2 - left - 25 : theme.windowWidth / 2 - left - 25)}px, 
        ${({ theme, top }) => (theme.windowWidth > 768 ? theme.windowHeight / 2 - top - 25 - 80 : theme.windowHeight / 2 - top - 25 - 50)}px)
      scale(1.5);
    }
  }

  ${({ animate }) => animate && 'animation: lightMoveSimple2 14s forwards;'}
`;

export const CircleSimple2 = styled.div`
  ${CircleCommon};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  background: #E4E0D9;
  box-shadow:
     0 0 1rem 1rem #CB9C98, 
     0 0 2rem 2rem #C5938D,
     0 0 3rem 2rem #C5938D,
     0 0 5rem 2rem #C5938D,
     0 0 10rem 2rem white;
`;

/// /Light1

export const Container1 = styled.div`
  ${ContainerCommon};
  width: 200px;
  height: 200px;
  @keyframes lightMove1{
    0%{
    }
    100%{
      transform: translate(
        ${({ theme, left }) => (theme.windowWidth > 768 ? theme.windowWidth / 2 - left - 100 : theme.windowWidth / 2 - left - 100)}px, 
        ${({ theme, top }) => (theme.windowWidth > 768 ? theme.windowHeight / 2 - top - 100 - 80 : theme.windowHeight / 2 - top - 100 - 50)}px)
      scale(.7) rotate(-30deg);
    }
  }

  ${({ animate }) => animate && 'animation: lightMove1 2s forwards;'}
`;

export const Circle2 = styled.div`
  ${CircleCommon};
  background: #B3B7DC;
`;

export const Axis = styled.div`
  border-radius: 50%;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width / 10}px;
  background: #A2A8DE;
  opacity: .8;
  box-shadow: 
    0 0 2rem .5rem #BFC3E3,
    0 0 3rem 1rem #B6BCEE,
    0 0 5rem 1rem #9FA6E5,
    0 0 15rem 3rem #878ECC;
  position: fixed;
  top: 0;
  left: 0;
  right: 0; 
  bottom: 0;
  margin: auto;
  transform: rotate(${({ rotate }) => rotate}deg);
  
`;

///

export const C2 = styled.div`
  ${ContainerCommon};
  width: 50px;
  height: 50px;
  @keyframes lightMove2{
    0%{
    }
    50%{
      transform: translate(
        ${({ theme, left }) => (theme.windowWidth > 768 ? theme.windowWidth / 2 - left - 25 : theme.windowWidth / 2 - left - 25)}px, 
        ${({ theme, top }) => (theme.windowWidth > 768 ? theme.windowHeight / 2 - top - 25 - 80 : theme.windowHeight / 2 - top - 25 - 50)}px)
      scale(5);
      opacity: 1;
    }
    70%{
      transform: translate(
        ${({ theme, left }) => (theme.windowWidth > 768 ? theme.windowWidth / 2 - left - 25 : theme.windowWidth / 2 - left - 25)}px, 
        ${({ theme, top }) => (theme.windowWidth > 768 ? theme.windowHeight / 2 - top - 25 - 80 : theme.windowHeight / 2 - top - 25 - 50)}px)
      scale(1);
      opacity: 0;
    }
    80%{
      opacity: 0;
    }
    100%{
      transform: translate(
        ${({ theme, left }) => (theme.windowWidth > 768 ? theme.windowWidth / 2 - left - 25 : theme.windowWidth / 2 - left - 25)}px, 
        ${({ theme, top }) => (theme.windowWidth > 768 ? theme.windowHeight / 2 - top - 25 - 80 : theme.windowHeight / 2 - top - 25 - 50)}px);
      opacity: 1;}
  }

  ${({ animate }) => animate && 'animation: lightMove2 5s forwards;'}
`;

export const Circle3 = styled.div`
  ${CircleCommon};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  background: transparent;
  box-shadow:
    inset 0 0 .5rem #EBECC3,
     0 0 .5rem 0 #F2F2D7,
     0 0 1rem .5rem #EBECC3,
     0 0 3rem .5rem #D9BFE9;

  ${appearSudden};
  ${({ animate }) => animate && 'animation: appear-sudden 3s linear alternate infinite backwards'};
  animation-delay: ${({ delay }) => delay}s;
`;

///

export const Container3 = styled.div`
  ${ContainerCommon};
  width: 100px;
  height: 100px;
  @keyframes lightMove3{
    0%{
    }
    100%{
      transform: translate(
        ${({ theme, left }) => (theme.windowWidth > 768 ? theme.windowWidth / 2 - left - 50 - 30 : theme.windowWidth / 2 - left - 50 - 40)}px, 
        ${({ theme, top }) => (theme.windowWidth > 768 ? theme.windowHeight / 2 - top - 50 - 90 : theme.windowHeight / 2 - top - 50 - 70)}px)
      scale(2.5);
    }
  }

  ${({ animate }) => animate && 'animation: lightMove3 3s forwards;'}
`;

export const Circle31 = styled.div`
  ${CircleCommon};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  background: #EFDADA;
  box-shadow:
    inset 0 0 1rem 1rem #E8A5A5,
     0 0 1rem .4rem #EEBDBD,
     0 0 5rem 1rem #E98154;

  ${appearLight};
  animation-delay: ${({ delay }) => delay}s;
`;

///

export const Container4 = styled.div`
  ${ContainerCommon};
  width: 80px;
  height: 80px;
  @keyframes lightMove4{
    0%{
    }
    100%{
      transform: translate(
        ${({ theme, left }) => (theme.windowWidth > 768 ? theme.windowWidth / 2 - left - 40 : theme.windowWidth / 2 - left - 40)}px, 
        ${({ theme, top }) => (theme.windowWidth > 768 ? theme.windowHeight / 2 - top - 40 - 100 : theme.windowHeight / 2 - top - 40 - 70)}px)
        scale(1.5);
    }
  }

  ${({ animate }) => animate && 'animation: lightMove4 3s forwards;'}
`;

export const Circle4 = styled.div`
  position: fixed;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-radius: 50%;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  background: ${({ color }) => color};
  box-shadow:
    inset 0 0 1rem ${({ color }) => color},
     0 0 1rem .4rem ${({ color }) => color},
     0 0 5rem 1rem ${({ color }) => color};

  @keyframes opaque-rotate{
    0%{opacity: 0.3; transform: translate(0, 0);}
    25%{opacity: 1; transform: translate(.5rem, 0);}
    50%{opacity: 0.3; transform: translate(.5rem, .5rem);}
    75%{opacity: 1; transform: translate(0, .5rem);}
    100%{opacity: 0.3; transform: translate(0, 0);}
  }

  animation: opaque-rotate 4s infinite linear;
  animation-delay: -${({ delay }) => delay}s;
`;

///

export const Container5 = styled.div`
  ${ContainerCommon};
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  transform: translate(0, 0);

  ${({ visible }) => !visible && 'pointer-events: none;'}
`;

export const Circle5 = styled.div`
  position: fixed;
  ${({ visible }) => !visible && 'opacity: 0'};
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-radius: 50%;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  background: #A0C2D8;
  box-shadow:
     0 0 .2rem .1rem #C8DDEB,
     0 0 1rem .2rem white,
     0 0 1.5rem .2rem #8EC1E0,
     0 0 3rem .5rem white;
    //  0 0 5rem 1rem #A9CADF;

  ${appearLight};
  // animation: appearLight .6s linear alternate infinite backwards;
  // animation-delay: -${({ delay }) => delay}s;

  cursor: pointer;

`;

///

export const Container6 = styled.div`
  ${ContainerCommon};
  width: 90px;
  height: 90px;
  @keyframes lightMove4{
    0%{
    }
    100%{
      transform: translate(
        ${({ theme, left }) => (theme.windowWidth > 768 ? theme.windowWidth / 2 - left - 45 : theme.windowWidth / 2 - left - 45)}px, 
        ${({ theme, top }) => (theme.windowWidth > 768 ? theme.windowHeight / 2 - top - 45 - 100 : theme.windowHeight / 2 - top - 45 - 70)}px);
    }
  }

  ${({ animate }) => animate && 'animation: lightMove4 3s forwards;'}
`;

export const Circle6 = styled.div`
  position: fixed;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-radius: 50%;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  background: transparent;
  box-shadow:
    inset 0 0 1rem white,
     0 0 .5rem .2rem white;
     ${appearLight};
  animation-delay: ${({ delay }) => delay}s;
`;

///

export const StyledLight1 = styled.div`
  ${ContainerCommon};
  @keyframes lightMove{
    0%{
    }
    100%{
      transform: translate(
        ${({ theme, left }) => (theme.windowWidth > 768 ? theme.windowWidth / 2 - left - 25 - 40 : theme.windowWidth / 2 - left - 25)}px, 
        ${({ theme, top }) => (theme.windowWidth > 768 ? theme.windowHeight / 2 - top - 25 - 80 : theme.windowHeight / 2 - top - 25 - 50)}px)
      scale(1.5) rotate(360deg);
    }
  }

  ${({ animate }) => animate && 'animation: lightMove 3s forwards;'}
`;

export const Axis2 = styled.div`
  
  border-radius: 50%;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width / 20}px;
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(${({ rotate }) => rotate}deg);
  background: rgba(255, 255, 255, 0.7);
  opacity: .8;
  box-shadow: 0 0 3rem .5rem white;
  position: fixed;
  
`;

export const Axis3 = styled.div`
  border-radius: 50%;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width / 20}px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(${({ rotate }) => rotate}deg);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 3rem .5rem white;
  position: fixed;
  ${appearLight};
  animation-delay: ${({ delay }) => delay}s;
`;
///

export const ContainerLetter = styled.div`
  ${ContainerCommon};
  width: 10rem;
  @keyframes lightMoveSimple2{
    0%{
    }
    100%{
      transform: translate(
        ${({ theme, left }) => (theme.windowWidth > 768 ? theme.windowWidth / 2 - left - 25 - 70 : theme.windowWidth / 2 - left - 25 - 40)}px, 
        ${({ theme, top }) => (theme.windowWidth > 768 ? theme.windowHeight / 2 - top - 25 - 80 : theme.windowHeight / 2 - top - 25 - 50)}px);
    }
  }

  ${({ animate }) => animate && 'animation: lightMoveSimple2 1s forwards;'}
`;

export const LightLetter = styled.div`
  color: #F6F4DD;
  font-family: 'Bangers';
  text-shadow: 0 0 1rem #EAE4B5, 0 0 3rem #C2BF9C, 0 0 5rem #DED47B, 0 0 10rem #CB9C98;
  position: fixed;
  font-size: 6rem;
  transform: rotate(7deg);

  @keyframes color-simple{
    49%{ color:  #F6F4DD;  filter: brightness(100%);}
    50%{ color: white;  filter: brightness(150%);}
    100%{ color: white;  filter: brightness(150%);}
  }
  animation: color-simple .5s linear infinite alternate;

`;
