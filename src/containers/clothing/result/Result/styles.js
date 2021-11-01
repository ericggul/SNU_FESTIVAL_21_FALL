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

export const ImageContainer = styled.div`
    ${FlexCenterStyle};
    width: 100%;
    justify-content: flex-end;
    margin-right: 2rem;
    margin-top: 2rem;
`;

export const Image = styled.img`
    height: 44px;
    width: auto;
    margin: 5px;
    ${({ jump }) => jump && 'filter: drop-shadow(0 0 1rem yellow);'}
`;

export const MidContainer = styled.div`
    ${FlexCenterStyle};
    flex-direction: column;
    width: 100vw;
    background: ${({ background }) => background};
`;

export const Text = styled.div`
    ${FlexCenterStyle};
`;

export const Container = styled.div`
    ${FlexCenterStyle};
    position: relative;
    width: ${({ width }) => width}px;
    height: ${({ width }) => width * 2.18}px;

    pointer-events: none;

    transition: all .5s;
    
    @keyframes jumping{
        from{transform: translateY(0);}
        to{transform: translateY(-3rem);}
    }
    ${({ jump }) => jump && 'animation: jumping .5s infinite alternate;'}
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
    padding: .4rem 1rem;
    border-radius: 3rem;
    border: .2rem solid #707070;
    color: black;
    font-size: 1.7rem;
    font-weight: 500;
    cursor: pointer;
`;

export const SaveText = styled.div`
    color: #707070;
    font-size: 1.2rem;
    font-weight: 500;
`;
