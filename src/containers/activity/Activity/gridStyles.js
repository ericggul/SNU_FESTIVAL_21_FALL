import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';
import { motion } from 'framer-motion';

export const GridItem = styled(motion.div)`
    ${FlexCenterStyle};
    ${HoverStyle};
    flex-direction: column;
    margin: 2.5vw;
    cursor: pointer;
`;

export const ImageContainer = styled.div`
    max-width: calc(min(44vw, 430px));
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
`;

export const IconDescription = styled.div`
    position: relative; 
    margin-top: -0.7rem;
    margin-bottom: 1.4rem;
    font-size: 1rem;
    font-weight: 600;
    height: 1.6rem;
    width: 6.3rem;
    ${FlexCenterStyle};
    background: white;
    color: ${({ theme }) => theme.palette.BLACK_PURPLE};
    border-radius: 0.9rem;

    box-shadow: 
        0 0 2px ${({ theme }) => theme.palette.WHITE},
        0 0 5px ${({ theme }) => theme.palette.WHITE};
`;
