import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledClothing = styled.div`
    width: 100vw;
    max-width: ${({ theme }) => theme.windowWidth}px;
    display: flex;
    flex-direction: column;
    min-height: ${({ theme }) => theme.windowHeight}px;
    background: ${({ background }) => background};
    overflow-x: hidden;
    transition: background 1s;
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
    height: ${({ width }) => width * 2.174}px;
    overflow-x: hidden;

    // @keyframes jump{
    //     from{transform: translateY(0);}
    //     to{transform: translateY(-2rem);}
    // }
    // animation: jump .5s infinite alternate;
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

export const Converter = styled.div`
    ${FlexCenterStyle};
`;

export const ConverterCell = styled.div`
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.5rem;
    font-weight: 600;
    margin: .3rem;
    ${({ selected }) => selected && 'color: rgba(0, 0, 0, .46);'}
`;
