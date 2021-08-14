import styled, { css } from 'styled-components';

export const StyledWaveFourSide = styled.div`
    position: fixed;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const container = css`
    position: absolute;
    width: 100vw;
    height: 15vh;
    color: white;
`;

const moveAnimation = css`
    @keyframes move{
        from{
            transform: translateX(-30rem);
        }
        to{
            transform: translateX(${({ theme }) => theme.windowWidth}px);
        }
    }

    animation: move 10s linear infinite;
`;

export const UpperContainer = styled.div`
    ${moveAnimation}
    ${container}
`;

export const LowerContainer = styled.div`
    top: 85vh;
    ${moveAnimation}    
    ${container}
`;

export const WaveSideContainer = styled.div`
    position: absolute; 
    height: 70vh;
    top: 15vh;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Text = styled.div`
    color: white;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    font-size: 1rem;
    margin: auto;
    margin-top: 1rem;
    text-align: center;
    align-items: center;
`;
