import styled from 'styled-components';
import { CenterImageStyle } from '@S/responsive/display';

export const StyledLoading = styled.div`
    color: white;
    display: flex;
    ${CenterImageStyle};
    flex-direction: column;
    text-align: center;
    margin-top: 40vh;
    margin-bottom: 40vh;



    // @keyframes appear {
    //     from { opacity: 1; }
    //     to { opacity: 0; }
    // }
    // animation-name: appear;
    // animation-duration: 2s;
    // animation-timing-function: linear;
    // animation-fill-mode: forwards;
`;
