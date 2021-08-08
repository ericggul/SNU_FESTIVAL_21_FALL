import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

export const LargeCircle = styled.div`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    position: absolute;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;

    background: transparent;
    box-shadow: inset -10px 5px 0 1px #FFD436;
    border-radius: 50%;

    @keyframes shine{
        from{
            box-shadow: inset -10px 5px 0 0.1px #FFD436;
        }
        to{
            box-shadow: inset -10px 5px 0 3px #FFD436;
        }
    }

    animation: shine 5s infinite alternate;
`;
