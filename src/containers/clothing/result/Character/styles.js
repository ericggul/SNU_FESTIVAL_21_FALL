import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

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
