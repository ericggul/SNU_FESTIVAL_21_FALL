import styled from 'styled-components';

export const Name = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 0;
    border-bottom: 2px solid transparent;
    text-align: center;
    outline: 0;
    font-weight: 700;
    font-size: 1.8rem;
    padding: .5rem 0;
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
