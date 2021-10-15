import styled from 'styled-components';

export const StyledCustomPath = styled.div`
    position: absolute;
    width: ${({ theme }) => (theme.windowWidth > 768 ? theme.windowWidth * 0.661 : theme.windowWidth * 0.661)}px;
    top: ${({ theme }) => (theme.windowWidth > 768 ? 0 : theme.windowWidth * 1)}px;
    left:  ${({ theme }) => (theme.windowWidth > 768 ? 0 : theme.windowWidth * 0.1)}px;
    height: 100vh;
`;

export const Element = styled.div`
    height: 60px;
    width: ${({ width }) => width}px;
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
    animation-delay: ${({ delay }) => delay}s;
`;

export const BusObject = styled.img`
    width: 100%;
    height: auto;
`;
// offset-path: path(${({ path }) => path});
