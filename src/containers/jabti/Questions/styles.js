import styled from 'styled-components';

export const StyledQuestions = styled.div`
    padding-top: 50px;
    opacity: ${props => props.opacity};
    transition: opacity 1s;
    position: relative;
`;

export const AnswerBox = styled.div`
    padding: 20px;
    padding-left: 0;
    cursor: pointer;
`;
