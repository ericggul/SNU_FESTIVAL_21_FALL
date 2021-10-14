import styled from 'styled-components';

export const StyledCustomPath = styled.div`

`;

export const Element = styled.div`
    height: 60px;
    width: 60px;
    position: absolute;
    offset-path:  path('${({ path }) => path}');
    @keyframes travel{
        from{
            offset-distance: 0%;
        }
        to{
            offset-distance: 100%;
        }
    }

    animation: travel 5s linear forwards;
`;

export const BusObject = styled.img`
    width: 100%;
    height: auto;
`;
// offset-path: path(${({ path }) => path});
