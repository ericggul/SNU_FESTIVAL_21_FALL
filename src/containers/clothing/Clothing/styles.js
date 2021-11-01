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
    margin-bottom: 4rem;
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

    //1, 2, 7, 8, 10
    color: rgba(255, 255, 255, 0.8);
    transition: color .5s;
    ${({ selectedBackground }) => [1, 2, 7, 8, 10].includes(selectedBackground) && 'color: rgba(200,200, 200, 0.8)'}
`;

export const ConverterCell = styled.div`
    font-size: 1.5rem;
    margin: .3rem;
    cursor: pointer;
    transition: color .5s;
    ${({ selected }) => selected && 'color: rgba(0, 0, 0, .46);'}
    ${({ selected }) => selected && 'font-weight: 800;'}
`;

export const Save = styled.div`
    margin: 2rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    padding: .4rem 2rem;
    border-radius: 3rem;
    border: .2rem solid #707070;
    color: #707070;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
`;

export const SaveText = styled.div`

    color: #707070;
    font-weight: 500;
    margin-bottom: 3rem;
`;

export const ResetText = styled.div`
    margin: 4rem 0;
    color: #707070;
    font-weight: 500;
    cursor: pointer;
`;
