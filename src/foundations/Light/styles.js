import styled from 'styled-components';

export const StyledLight1 = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: ${({ width }) => width}px;
`;

export const Circle1 = styled.div`
  position: absolute;

  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
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

export const Circle2 = styled.div`
  position: absolute;

  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: transparent;
  box-shadow:
    inset 0 0 1rem white,
     0 0 4rem 2rem white, 
     0 0 6rem 2rem white;
`;

export const Circle3 = styled.div`
  position: absolute;

  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: transparent;
  box-shadow:
    inset 0 0 1rem white,
     0 0 1rem .4rem white,
     0 0 5rem 1rem white;
`;

export const Circle4 = styled.div`
  position: absolute;

  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: transparent;
  box-shadow:
    inset 0 0 1rem white,
     0 0 1rem .4rem white,
     0 0 5rem 1rem white;
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
