import styled from 'styled-components';

export const StyledTextShine = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
    // height: 100vh;
    // width: 100vw;
`;

export const Text = styled.div`
    position: relative;

    background: linear-gradient(90deg, #000, #fff, #000);
    background-repeat: no-repeat;
    text-transform: uppercase;
    text-align: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(255,255,255,0.3));

    @keyframes move {
        from{
            background-position: -25em;
        }
        to{
            background-position: 25em;
        }
    }

    animation: move 3s linear infinite;
`;
