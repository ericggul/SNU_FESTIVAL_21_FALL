import styled from 'styled-components';
import { FlexCenterStyle, CenterImageStyle } from '@S/responsive/display';

export const StyledMapGuide = styled.div`
    width: ${({ theme }) => theme.windowWidth}px;
    ${FlexCenterStyle};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
`;

export const MapContainer = styled.img`
    width: 90%;
    max-width: 800px;
    height: auto;
`;
