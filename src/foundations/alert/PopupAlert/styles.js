import styled from 'styled-components';

const getRandom = (a, b) => (Math.random() * (b - a) + a);

export const Alert = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    margin: auto;
    width: 200px;
    height: 200px;
    background: white;
    z-index: 100;
    text-align: center;

    @keyframes appear{
        0%{opacity: 0; top: ${getRandom(40, 60)}px;}
        100%{opacity: 1; top: 30px;}
    }

    @keyframes disappear{
        0%{opacity: 1;}
        100%{opacity: 0; top: ${getRandom(0, 20)}px;}
    }

    animation: 1000ms appear, 1000ms 1000ms disappear;
`;
