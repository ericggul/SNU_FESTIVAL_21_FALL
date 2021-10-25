import styled from 'styled-components';

export const StyledIndicator = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 17px);
    align-items: center;
    margin-top: .5rem;
`;

export const LightBulb = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 3.5px;
    margin: 5px;
    background: #D8CB5C;
    
    filter: blur(2.2px);
    ${({ light }) => light == 1 && 'background: #5A5840;'}
    ${({ current }) => current && 'background: white;'}
    // ${({ current }) => current && 'border: 1px solid white;'}
    //#E5DE9B;
`;
