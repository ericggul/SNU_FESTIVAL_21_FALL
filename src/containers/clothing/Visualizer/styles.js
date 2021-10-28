import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const Visualizer = styled.div`
    display: grid;
    width: 100vw;
    justify-items: center;
    align-items: center;
    overflow-x: auto;
`;

export const Expander = styled.div`
    text-align: center;
    font-size: 1.2rem;
    color: #707070;
    font-weight: 300;
`;

export const ExpandedGrid = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(7, ${({ width }) => width}px);
    position: relative;
    box-shadow: 0 0 1rem .5rem rgba(0, 0, 0, .16);
    background: white;
`;

export const ImageContainer = styled.div`
    ${({ selected }) => selected && 'box-shadow: inset 0 0 1rem .5rem rgba(0, 0, 0, .32);'}

    transition: border .5s;
`;

export const ImageBubble = styled.img`
    width: ${({ width }) => width}px;
    height: auto;
    margin: 1rem 0;
    cursor: pointer;
`;

export const NarrowFlex = styled.div`
    background: white;
    margin: 1rem 0;
    display: flex;
    width: ${({ width }) => width}px;
    overflow-x: scroll;
    position: relative;
    scroll-snap-type: x proximity;
    box-shadow: 0 0 1rem .5rem rgba(0, 0, 0, .16);

    &::-webkit-scrollbar {
        display: inline; /* Chrome, Safari, Opera*/
        width: .3rem;
    }

    &::-webkit-scrollbar-track {
        display: inline; /* Chrome, Safari, Opera*/
        background: #aaa;
    }

    &::-webkit-scrollbar-thumb {
        display: inline; /* Chrome, Safari, Opera*/
        background: white;
        box-shadow: 0 0 1rem .5rem rgba(0, 0, 0, .5);
        cursor: pointer;
    }

`;
