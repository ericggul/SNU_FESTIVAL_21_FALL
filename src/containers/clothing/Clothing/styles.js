import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledClothing = styled.div`
    width: 100vw;
    min-height: ${({ theme }) => theme.windowHeight}px;
    background: ${({ background }) => background};
`;

export const Content = styled.div`
    ${FlexCenterStyle};
    flex-direction: column;
`;

export const MidContainer = styled.div`
    ${FlexCenterStyle};
    flex-direction: column;
`;

export const Text = styled.div`
    ${FlexCenterStyle};
`;

export const Container = styled.div`
    ${FlexCenterStyle};
    position: relative;
    width: ${({ width }) => width}px;
    height: ${({ width }) => width * 2}px;
    overflow-x: hidden;
    overflow-y: hidden;
`;

export const Body = styled.img`
    position: absolute;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
    width: ${({ width }) => width}px;
    height: auto;
`;

export const Element = styled.img`
    position: absolute;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
    width: ${({ width }) => width}px;
    height: auto;
    ${({ zIndexOnTop }) => zIndexOnTop && 'z-index: 1;'}
`;

// Control

export const ControlUnit = styled.div`
    ${FlexCenterStyle};
    position: absolute;
    flex-direction: column;
    width: 4rem;
    height: 10rem;
    right: 0;
    top: 3rem;
    margin-left: auto;
    margin-right: 0;
    overflow-x: hidden;
    overflow-y: hidden;
`;

export const ControlIcon = styled.div`
    ${FlexCenterStyle};
    flex-direction: column;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
    font-weight: 700;
    border: 2px solid black;
    margin: .2rem;
    cursor: pointer;
    color: black;

    ${({ clickable }) => clickable === false && 'color: #aaa;'}
    p{
        font-size: 1.1rem;
    }
`;
