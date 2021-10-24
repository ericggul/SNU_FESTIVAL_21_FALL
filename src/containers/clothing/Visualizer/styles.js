import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const Visualizer = styled.div`
    display: grid;
    width: 100vw;
    justify-items: center;
    align-items: center;
    overflow-x: scroll;
    margin: 1rem 0;
`;

export const Expander = styled.div`
    text-align: center;
    font-size: 1.5rem;
    p{
        margin: 0;
        padding: 0;
    }
    p:nth-of-type(2){
        font-weight: 700;
    }
`;

export const ExpandedGrid = styled.div`
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(5, ${({ width }) => width}px);
    position: relative;
`;

export const ImageContainer = styled.div`
    border: 2px solid transparent;
    ${({ selected }) => selected && 'border: 2px solid black;'}
    border-radius: .7rem;

    transition: border .5s;
`;

export const ImageBubble = styled.img`
    width: ${({ width }) => width - 4}px;
    height: auto;
    margin: 1rem 0;
    cursor: pointer;
`;

export const NarrowFlex = styled.div`
    margin: 2rem 0;
    display: flex;
    width: ${({ width }) => width}px;
    overflow-x: scroll;
    position: relative;
    scroll-snap-type: x proximity;
`;
