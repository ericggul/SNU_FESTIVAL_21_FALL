import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { motion } from 'framer-motion';

export const StyledDate = styled(motion.div)`
    ${FlexCenterStyle};
    flex-direction: row;
    color: ${({ theme }) => theme.palette.WHITE};
    margin-bottom: 3rem;
`;

export const SingleDate = styled.div`
    ${FlexCenterStyle};
    flex-direction: column;
    margin: 0.2rem 1.1rem;
    cursor: pointer;
`;

export const Day = styled.div`
    font-size: 0.8rem;
`;

export const Date = styled.div`
    font-size: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    margin: auto;
    left: 0;
    right: 0;
    text-align: center;

    background: ${({ isSelected }) => isSelected && '#9581e9'};
    opacity: ${({ isSelected }) => isSelected && '0.68'};
`;
