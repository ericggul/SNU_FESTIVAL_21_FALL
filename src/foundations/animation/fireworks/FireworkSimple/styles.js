import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
    height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: none;
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
