import styled from 'styled-components';
import { FlexCenterStyle, ResponsiveHeightStyle } from '@S/responsive/display';

export const StyledQuestions = styled.div`

    ${FlexCenterStyle};
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    width: 100%;
    ${ResponsiveHeightStyle};
    max-width: 800px;
    max-height: 600px;
    position: absolute;
    margin: auto;
    top: ${({ theme }) => theme.windowHeight * 0.05}px;
    bottom: ${({ theme }) => theme.windowHeight * 0.15}px;

    opacity: ${props => props.opacity};
    transition: opacity 0.5s;
`;

export const Question = styled.div`
    font-size: 1.6rem;
    font-weight: 300;
    width: 90%;
    word-break: keep-all;
`;

export const Answer = styled.div`
    font-size: 2.4rem;
    font-weight: 600;
    display: flex;
    flex-direction: row;
`;

export const AnswerBox = styled.div`   
    padding: 1.5rem 3rem;
    cursor: pointer;
`;
