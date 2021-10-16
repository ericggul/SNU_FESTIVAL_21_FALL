import styled from 'styled-components';

export const StyledCustomPath = styled.div`
    position: absolute;
    width: ${({ theme }) => (theme.windowWidth > 768 ? theme.windowWidth * 0.883 : theme.windowWidth * 0.661)}px;
    top: ${({ theme }) => (theme.windowWidth > 768 ? theme.windowWidth * 0.215 : theme.windowWidth * 1)}px;
    left:  ${({ theme }) => (theme.windowWidth > 768 ? theme.windowWidth * 0.145 : theme.windowWidth * 0.1)}px;
    height: 100vh;
`;

export const Element = styled.div`
    height: 60px;
    width: ${({ width }) => width}px;
    position: absolute;
    offset-path:  path('${({ path }) => path}');
    @keyframes travel{
        0%{
            offset-distance: 0%;
        }
        95%{
            offset-distance: 98%;
            opacity: 1;
        }
        100%{
            offset-distance: 100%;
            opacity: 0;
        }
    }
    animation: travel 5s linear  infinite forwards;
    animation-delay: ${({ delay }) => delay}s;
    // transform: scaleY(-1);
`;

export const BusObject = styled.img`
    width: 100%;
    height: auto;
`;
// offset-path: path(${({ path }) => path});
