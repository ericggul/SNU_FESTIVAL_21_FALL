import styled from 'styled-components';

export const StyledTone = styled.div`
    display: flex;
    align-items: flex-box;
    flex-direction: row;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    border: ${({ current }) => (current ? '1px solid black' : '1px solid white')};
    transition: .5s;
`;

export const Button = styled.div`
    width: 100px;
    height: 100px;
    background: ${({ isActive }) => (isActive ? '#aaa' : '#fff')};
    color: black;

`;

export const PlayButton = styled.div`
    width: 100px;
    height: 100px;
    background: white;
    color: black;
`;
