import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledDj = styled.div`
    position: absolute;
    height: ${({ theme }) => theme.windowHeight}px;
    width: ${({ theme }) => theme.windowWidth}px;
    background: black;
`;

export const SliderPad = styled.div`
    ${FlexCenterStyle};
    width: 30vw;
    height: 30vw;
    background: pink;
`;

export const Dot = styled.div`
    width: 3vw;
    height: 3vw;
    border-radius: 50%;
    background: black;
    position: absolute;
`;
