import styled, { css } from 'styled-components';

export const StyledLight1 = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  transform: translate(-50%, -50%);
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.light};

  @keyframes lightMove{
    0%{
    }
    100%{
      transform: translate(
        ${({ theme, left }) => theme.windowWidth / 2 - left}px, 
        ${({ theme, top }) => theme.windowHeight / 2 - top}px)
      scale(1.5) rotate(360deg);
      filter: brightness(3);
    }
  }

  ${({ animate }) => animate && 'animation: lightMove 3s forwards;'}
`;

const CircleCommon = css`
  position: absolute;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

const appear = css`
  @keyframes appear{
    0%{opacity: 0;}
    100%{opacity: 1;}
  }
  animation: appear 3s linear alternate infinite backwards;
`;

const appearSudden = css`
  @keyframes appear-sudden{
    0%{opacity: 0;}
    70%{opacity: 0;}
    100%{opacity: 1;}
  }
  animation: appear-sudden 3s linear alternate infinite backwards;
`;

export const Circle1 = styled.div`
  ${CircleCommon};
  background: transparent;
  box-shadow:
    inset 0 0 1rem white,
     0 0 1rem white, 
     0 0 1.5rem white, 
     0 0 2rem white, 
     0 0 3rem white, 
     0 0 4rem 2rem white, 
     0 0 6rem 2rem white, 
     0 0 8rem 2rem white, 
     0 0 10rem 2rem white;
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

export const Circle2 = styled.div`
  ${CircleCommon};
  background: transparent;
  box-shadow:
    inset 0 0 1rem white,
     0 0 4rem 2rem white, 
     0 0 6rem 2rem white;
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

  ${appear};
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
  ${appear};
  animation-delay: ${({ delay }) => delay}s;
`;

export const Axis = styled.div`
  
  border-radius: 50%;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width / 20}px;
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(${({ rotate }) => rotate}deg);
  background: rgba(255, 255, 255, 0.7);
  opacity: .8;
  box-shadow: 0 0 3rem 1rem white;
  position: absolute;
  
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
  ${appear};
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
