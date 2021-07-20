import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledPlaceOne = styled.div`
    ${FlexCenterStyle};
    flex-direction: column;
`;

export const Stamp = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 50vw;
    height: 50vw;
    border-radius: 50%;
    background: white;
    border: 5px solid black;
`;

export const RegisteredStamp = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 50vw;
    height: 50vw;
    border-radius: 50%;
    background: black;

    @keyframes appear{
        0%{
            opacity: 0;
        }
        10%{ 
            opacity: 0.5;
            transform-origin: 50% 50%;
            transform: rotate(-2deg) scale(1.1);
        }
        100%{ 
            opacity: 1;
            transform: rotate(-15deg) scale(1);
        }
    }

    animation: appear 1.5s forwards;
`;

export const Congrats = styled.div`
    ${FlexCenterStyle};
    flex-direction: column;
    margin-top: 1rem;
`;

export const CongratsText = styled.div`
    margin: .7rem;
    font-size: 2rem;
`;

export const CongratsButton = styled.div`
    border-radius: 5px;
    padding: 10px;
    background: black;
    color: white;
    cursor: pointer;
`;

export const ConfettiWrapper = styled.div`
    position: absolute;
    top: 0;
    z-index: -1;
    height: ${({ theme }) => theme.windowHeight}px;

    @keyframes confetti-appear{
        0%{
            top: -${({ theme }) => theme.windowHeight}px;
        }
        100%{ 
            top: 0;
        }
    }

    animation: confetti-appear 1s backwards;
    animation-delay: 0.3s;
`;
