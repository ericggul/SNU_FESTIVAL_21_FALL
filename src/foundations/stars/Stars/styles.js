import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
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
