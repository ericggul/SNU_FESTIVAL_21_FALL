import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';
import { motion } from 'framer-motion';

export const GridItem = styled(motion.div)`
    ${FlexCenterStyle};
    flex-direction: column;
    margin: 2.5vw;
    position: relative;
    cursor: pointer;
`;

export const ImageContainer = styled.div`
    max-width: calc(min(35vw, 430px));
    height: auto;
    position: relativve;
`;

export const IconImage = styled.img`
    max-width: 100%;

    @keyframes swing{
        from{
            transform: rotate(-6deg);
        }
        to{ 
            transform: rotate(6deg);
        }
    }

    animation: swing ${({ duration }) => duration}s infinite linear alternate;
    animation-delay: ${({ delay }) => delay}s;
    filter: drop-shadow(0 0 2px white) drop-shadow(0 0 5px white);
`;

export const IconDescription = styled.div`
    position: relative; 
    margin-top: -0.7rem;
    margin-bottom: 1.4rem;
    font-size: 1rem;
    font-weight: 700;
    height: 1.6rem;
    width: 6.3rem;
    ${FlexCenterStyle};
    background: white;
    color: ${({ theme }) => theme.palette.BLACK_PURPLE};
    border-radius: 0.9rem;

    box-shadow: 
        0 0 .1rem .1rem white,
        0 0 .5rem .2rem white,
        0 0 1rem .5rem white;
        
`;

export const Accomplished = styled.img`
    position: absolute;
    right: 1rem;
    bottom: -1.5rem;
    width: 8rem;
`;
