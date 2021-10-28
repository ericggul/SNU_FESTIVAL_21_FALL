import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const Container = styled.div`
    ${FlexCenterStyle};
    position: fixed;
    top: 6rem;
    right: 0rem;
    ${({ expanded }) => !expanded && 'right: -5rem;'}
    transition: all 1s;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
`;

export const ExpandButton = styled.div`
    width: 1.3rem;
    height: 4rem;
    ${FlexCenterStyle};
    background: white;
    border-radius: 1rem 0 0 1rem;
`;

export const ControlUnit = styled.div`
    transition: all 1s;
    ${FlexCenterStyle};
    flex-direction: column;
    width: 5rem;
    height: auto;
    right: 0;
    top: 6rem;
    margin-left: auto;
    margin-right: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    background: white;
    border-radius: 1rem 0 0 1rem;
`;

export const Text = styled.div`
    font-size: 1.3rem;
    font-weight: 500;
    text-align: center;
    margin: 1rem 0;
    color: #5e5e5e;
`;

export const BackgroundUnit = styled.div`
    margin: .5rem;
    margin-top: .9rem;
`;

export const BackgroundGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2rem);
`;

export const SingleColor = styled.div`
    width: 1.6rem;
    height: 1.6rem;
    margin: .3rem;
    border-radius: .4rem;
    box-shadow: 0 0 .5rem 0 rgba(0, 0, 0, .16);
    background: ${({ background }) => background};
    ${({ selected }) => selected && 'box-shadow: 0 0 .5rem .2rem #888;'}
`;

export const SizeUnit = styled.div`
    margin: .5rem;
    margin-bottom: 1rem;
    ${FlexCenterStyle};
    flex-direction: column;
`;

export const ControlIcon = styled.div`
    ${FlexCenterStyle};
    flex-direction: column;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
    font-weight: 700;
    margin: .5rem;
    box-shadow: 0 0 .5rem .2rem rgba(0, 0, 0, .16);
    cursor: pointer;
    color: #808080;

    ${({ clickable }) => clickable === false && 'color: #aaa;'}
    p{
        font-size: 1.1rem;
    }
`;
