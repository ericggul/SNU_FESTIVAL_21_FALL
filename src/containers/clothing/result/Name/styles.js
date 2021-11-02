import styled from 'styled-components';

export const Name = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;
    z-index: 15;
    margin-bottom: 4rem;
`;

export const SmallText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    font-size: 1rem;
    color: #707070;
`;
export const Input = styled.input`
    border: 0;
    border-bottom: 2px solid transparent;
    text-align: center;
    outline: 0;
    font-weight: 700;
    font-size: 1.8rem;
    padding-bottom: .5rem;
    height: 3rem;
    background: transparent;
    transition: border-color 0.2s;
    spellcheck: false;
    margin-bottom: .2rem;

    &::placeholder {
        color: #aaa;
    }

    &:focus{
        outline: none;
        border-bottom: 2px solid black;
        
    }

`;
