import styled, { css } from 'styled-components';

const ContainerCommon = css`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: 50px;
  height: 50px;
  transform: translate(-25px, -25px);
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.light};
`;

const CircleCommon = css`
  position: absolute;
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
  animation: appear-sudden 3s linear alternate infinite backwards;
`;

export const ContainerSimple = styled.div`
  ${ContainerCommon};
  @keyframes lightMove{
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

  ${({ animate }) => animate && 'animation: lightMove 3s forwards;'}
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

/// /Light1

export const Container1 = styled.div`
  ${ContainerCommon};
  width: 200px;
  height: 200px;
  @keyframes lightMove{
    0%{
    }
    100%{
      transform: translate(
        ${({ theme, left }) => (theme.windowWidth > 768 ? theme.windowWidth / 2 - left - 100 : theme.windowWidth / 2 - left - 100)}px, 
        ${({ theme, top }) => (theme.windowWidth > 768 ? theme.windowHeight / 2 - top - 100 - 80 : theme.windowHeight / 2 - top - 100 - 50)}px)
      scale(.7) rotate(-30deg);
    }
  }

  ${({ animate }) => animate && 'animation: lightMove 2s forwards;'}
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
  position: absolute;
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
  @keyframes lightMove{
    0%{
    }
    100%{
      transform: translate(
        ${({ theme, left }) => (theme.windowWidth > 768 ? theme.windowWidth / 2 - left - 25 : theme.windowWidth / 2 - left - 25)}px, 
        ${({ theme, top }) => (theme.windowWidth > 768 ? theme.windowHeight / 2 - top - 25 - 80 : theme.windowHeight / 2 - top - 25 - 50)}px)
      scale(.7) rotate(-30deg);
    }
  }

  ${({ animate }) => animate && 'animation: lightMove 2s forwards;'}
`;


export const Circle3 = styled.div`
  ${CircleCommon};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  background: transparent;
  box-shadow:
    inset 0 0 1rem white,
     0 0 1rem .4rem white,
     0 0 5rem 1rem white;

  ${appearSudden};
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
        ${({ theme, left }) => (theme.windowWidth > 768 ? theme.windowWidth / 2 - left - 25 : theme.windowWidth / 2 - left - 25)}px, 
        ${({ theme, top }) => (theme.windowWidth > 768 ? theme.windowHeight / 2 - top - 25 - 80 : theme.windowHeight / 2 - top - 25 - 50)}px)
      scale(1.5) rotate(360deg);
    }
  }

  ${({ animate }) => animate && 'animation: lightMove 3s forwards;'}
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
     0 0 10rem 2rem white;
`;

export const Circle3 = styled.div`
  ${CircleCommon};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  background: transparent;
  box-shadow:
    inset 0 0 1rem white,
     0 0 1rem .4rem white,
     0 0 5rem 1rem white;

  ${appearSudden};
  animation-delay: ${({ delay }) => delay}s;
`;

export const Circle31 = styled.div`
  ${CircleCommon};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  background: rgba(255, 255, 255, 0.8);
  box-shadow:
    inset 0 0 1rem 1rem white,
     0 0 1rem .4rem white,
     0 0 5rem 1rem white;

  ${appearLight};
  animation-delay: ${({ delay }) => delay}s;
`;

export const Circle4 = styled.div`
  ${CircleCommon};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  background: transparent;
  box-shadow:
    inset 0 0 1rem white,
     0 0 1rem .4rem white,
     0 0 5rem 1rem white;
`;

export const Circle5 = styled.div`
  ${CircleCommon};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  background: transparent;
  box-shadow:
    inset 0 0 1rem white,
     0 0 .5rem .2rem white;
     ${appearLight};
  animation-delay: ${({ delay }) => delay}s;
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
  position: absolute;
  
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
  position: absolute;
  ${appearLight};
  animation-delay: ${({ delay }) => delay}s;
`;

export const LightLetter = styled.div`
  color: #F6F4DD;
  font-family: 'Bangers';
  text-shadow: 0 0 1rem #EAE4B5, 0 0 3rem #C2BF9C, 0 0 5rem #DED47B, 0 0 10rem #CB9C98;
  position: absolute;
  font-size: 3rem;

  @keyframes color-simple{
    49%{ color:  #F6F4DD;  filter: brightness(100%);}
    50%{ color: white;  filter: brightness(150%);}
    100%{ color: white;  filter: brightness(150%);}
  }
  animation: color-simple .5s linear infinite alternate;

`;
