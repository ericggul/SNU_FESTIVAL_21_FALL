import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
    height: ${({ theme }) => theme.windowHeight * 1.2};
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: -1;
	background: ${({ theme }) => theme.palette.DARK_PURPLE};
`;

export const StageContainer = styled.div`
    overflow: hidden;
    box-sizing: initial;

`;

export const CanvasContainer = styled.div`
    width: 100%;
	height: 100%;
	transition: filter 0.3s;

`;
