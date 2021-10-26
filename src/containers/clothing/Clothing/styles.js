import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledClothing = styled.div`
    width: 100vw;
    min-height: ${({ theme }) => theme.windowHeight}px;
    background: ${({ background }) => background};
    overflow-x: hidden;
`;

export const Content = styled.div`
    ${FlexCenterStyle};
    flex-direction: column;
    overflow-x: hidden;
`;

export const MidContainer = styled.div`
    ${FlexCenterStyle};
    flex-direction: column;
    overflow-x: hidden;
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
