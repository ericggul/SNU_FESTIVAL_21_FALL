import styled, { css } from 'styled-components';

const appear = css`
  @keyframes appear-2 {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  animation-name: appear-2;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  opacity: 0;
`;

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    ${appear};
`;
export const StarContainer = styled.div`
    @keyframes appearJabtiStar{
        from{ opacity: 0}
        to{opacity: 1}
    }
    opacity: 0;
    animation: appearJabtiStar ${({ time }) => time}s infinite alternate;
    animation-delay: ${({ delay }) => delay}s;
`;

export const QuatroStarContainer = styled.div`
    @keyframes appear2{
        from{filter: brightness(0.7)}
        to{filter: brightness(1)}
    }
    animation: appear2 3s infinite alternate;
    animation-delay: 0s;
`;

export const SmallDot = styled.div`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    background: ${({ color }) => color};
    box-shadow: 0 0 3px ${({ color }) => color};
    position: absolute;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
    border-radius: 50%;
`;

export const SmallLineDivided = styled.div`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    transform: translate(-50%, -50%) rotate(${({ angle }) => angle}deg);
    background: ${({ color }) => color};
    box-shadow: 0 0 3px ${({ color }) => color};
    position: absolute;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
`;

export const SmallLine = styled.div`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    transform: translate(-50%, -50%) rotate(${({ angle }) => angle}deg);
    background: ${({ color }) => color};
    box-shadow: 0 0 3px ${({ color }) => color};
    position: absolute;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
`;

export const DivLine = styled.div`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    transform: translate(-50%, -50%) rotate(${({ angle }) => angle}deg);
    background: ${({ theme }) => theme.palette.STAR_YELLOW2};
    box-shadow: 
        0 0 3px ${({ theme }) => theme.palette.STAR_YELLOW2},
        0 0 13px  ${({ theme }) => theme.palette.STAR_YELLOW2}, 
        0 0 30px  ${({ theme }) => theme.palette.STAR_YELLOW2};
    position: absolute;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
    border-radius: 50%;

`;

export const ImageMoon = styled.img`
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  height: ${({ size }) => size}px;
  width: auto;
`;
