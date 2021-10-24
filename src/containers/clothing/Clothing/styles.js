import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledClothing = styled.div`

`;

export const Content = styled.div`
    ${FlexCenterStyle};
    flex-direction: column;
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
`;
