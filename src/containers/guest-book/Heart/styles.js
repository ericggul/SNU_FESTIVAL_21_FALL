import styled, {css, keyframes} from 'styled-components';
import {CenterImageStyle} from '@S/responsive/display';


export const StyledHeart1 = styled.div`
    ${CenterImageStyle};
    width: 100px;
    height: 100px;
`;

export const StyledHeart2 = styled.div`
    ${CenterImageStyle};
    width: 270px;
    height: 90px;
    display: flex;
    flex-direction: row;
`;




export const HeartImage = styled.img`
    width: 80%;
    height: auto;
    transform: scale(0);

    @keyframes bigger{
        0%{ transform: scale(0) translateY(0);}
        10%{transform: scale(0.4) translateY(0);}
        30%{transform: scale(1.2) translateY(-10px);}
        50%{transform: scale(0.8) translateY(0);}
        70%{transform: scale(1) translateY(0);}
        90%{transform: scale(1) translateY(0);}
        100%{transform: scale(0) translateY(0);}
    }

    animation:bigger 0.5s cubic-bezier(0.280, 0.840, 0.420, 1) forwards;
    animation-delay: ${({delay}) => delay}s;
`;
