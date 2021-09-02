import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;
export const StarContainer = styled.div`
    @keyframes appear{
        from{ opacity: 0}
        to{opacity: 1}
    }

    @keyframes appear2{
        0%{ 
            opacity: 0
        }
        30% {
            opacity: 1;
        }
        50%{
            opacity: 0.5;
        }
        80%{
            opacity: 1;
        }
    }
    opacity: 0;
    animation: appear2 ${({ time }) => time}s infinite alternate;
    animation-delay: ${({ delay }) => delay}s;
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
    background: #FFD436;
    box-shadow: 0 0 3px #FFD436, 0 0 13px #FFD436, 0 0 30px #FFD436;
    position: absolute;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
    border-radius: 50%;

    @keyframes flicker{
        from{
            box-shadow: 0 0 3px #FFD436, 0 0 13px #FFD436, 0 0 30px #FFD436;
        }
        to{
            box-shadow: 0 0 3px #FFD436,  0 0 6px #FFD436, 0 0 30px #FFD436;
        }
    }

    animation: flicker 4s infinite alternate;
`;
