import styled from 'styled-components';
import { FlexCenterStyle, CenterImageStyle } from '@S/responsive/display';

export const StyledMapGuide = styled.div`
    width: ${({ theme }) => theme.windowWidth}px;
    ${FlexCenterStyle};
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
`;

export const EventText = styled.div`
    width: 80%;
    max-width: 800px;
    color: white;
    font-size: 1rem;
    text-align: center;
    margin: 1.5rem 0;
`;

export const MapContainer = styled.img`
    width: 90%;
    max-width: 800px;
    height: auto;
`;
