import styled from 'styled-components';

export const StyledTransition = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: transparent;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(50,50px);
    grid-template-rows: repeat(50, 50px);
`;

export const ChildComponent = styled.div`
    width: 0;
    height: 0;
    background: black;
    @keyframes breathe{
        from{
            width: 5px;
            height: 5px;
            margin-left: 20px;
            margin-top: 20px;
        }
        to{
            width: 50px;
            height: 50px;
            
        }
    }
    @include blink-animation-delay;
    animation: breathe 1s linear forwards;
    animation-delay: ${props => props.delay}s;
`;
