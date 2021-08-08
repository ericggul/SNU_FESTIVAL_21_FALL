import styled from 'styled-components';

export const StyledCustomPath = styled.div`

`;

export const Element = styled.div`
    height: 40px;
    width: 40px;
    background: pink;
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

    animation: travel 2s infinite alternate;
`;

// offset-path: path(${({ path }) => path});
