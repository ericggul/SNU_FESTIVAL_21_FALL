import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: ${({ theme }) => theme.windowHeight * 1.1}px;
    width: ${({ theme }) => theme.windowWidth * 1.1}px;
`;

export const Viewport = styled.div`
    bottom: 0;
    left: 0;
    overflow: hidden;
    perspective: 400;
    position: absolute;
    right: 0;
    top: 0;

`;

export const World = styled.div`
    height: ${({ theme }) => theme.windowHeight * 0.7}px;
    width: ${({ theme }) => theme.windowHeight * 0.7}px;
    margin-left: ${({ theme }) => theme.windowHeight * 0.35}px;
    margin-top: ${({ theme }) => theme.windowHeight * 0.35}px;
    left: 50%;
    top: 50%;
    transform-style: preserve-3d;     

`;

export const CloudBase = styled.div`
    height: ${({ theme }) => theme.windowHeight * 0.035}px;
    width: ${({ theme }) => theme.windowHeight * 0.035}px;
    top: ${({ theme }) => theme.windowHeight * 0.35}px;
    left: ${({ theme }) => theme.windowHeight * 0.35}px;
    margin-left: -${({ theme }) => theme.windowHeight * 0.18}px;
    margin-top: -${({ theme }) => theme.windowHeight * 0.18}px;
    position: absolute;

`;

export const CloudLayer = styled.div`
    height: ${({ theme }) => theme.windowHeight * 0.35}px;
    width: ${({ theme }) => theme.windowHeight * 0.35}px;
    top: 50%;
    left: 50%;
    margin-left: -${({ theme }) => theme.windowHeight * 0.18}px;
    margin-top: -${({ theme }) => theme.windowHeight * 0.18}px;
    position: absolute;
`;
