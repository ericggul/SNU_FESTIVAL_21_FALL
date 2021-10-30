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

    @keyframes appear{
        from{opacity: 0; }
        to{opacity: 1; }
    }
    animation: appear 2s;
`;

export const MidContainer = styled.div`
    ${FlexCenterStyle};
    flex-direction: column;
`;

export const Text = styled.div`
    ${FlexCenterStyle};
    text-align: center;
    padding: .3rem 1.3rem;
    background: white;
    font-size: 500;
    border-radius: .5rem;
    border: .5rem solid rgba(255, 255, 255, 0.5);
`;

export const Container = styled.div`
    ${FlexCenterStyle};
    position: relative;
    width: ${({ width }) => width}px;
    height: ${({ width }) => width * 2.174}px;

    @keyframes bigger{
        from{transform: scale(0);}
        to{transform: scale(1);}
    }
    animation: bigger 2.4s backwards;
    animation-delay: 1s;
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

export const Save = styled.div`
    margin: 2rem;
    margin-bottom: .8rem;
    padding: .4rem 1.5rem;
    border-radius: 3rem;
    border: .2rem solid #707070;
    color: black;
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
`;

export const SaveText = styled.div`
    color: #707070;
    font-weight: 500;
    margin-bottom: 3rem;
`;
