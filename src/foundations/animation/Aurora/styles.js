import styled from 'styled-components';

export const AuroraContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#2C1630, #282B38);
`;

export const AuroraSquare = styled.div`
    width: 1vw;
    height: 20vh;
    border-radius: 50%;
    position: absolute;
    bottom: -10vh;
    left: 20vw;
    background: linear-gradient(#4A9678, #55AF8B);
    box-shadow: 
        0 0 1vh #4A9678,
        0 0 3vh #4A9678,
        0 0 20vh #4A9678;
`;
