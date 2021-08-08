import styled, { css } from 'styled-components';

export const StyledTarot = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base};
`;

const flicker = css`
  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 0.9; }
  }
`;

const fluctuation = css`
  @keyframes fluctuation {
    from { transform: scale(1); }
    to { transform: scale(${Math.random() * 0.4 + 1}); }
  }
`;

const rotate = css`
  @keyframes rotate {
    from { transform: rotate(0); }
    to { transform: rotate(${Math.random() * 40 - 20}deg); }
  }
`;

export const Image = styled.img`
  position: absolute;
  width: ${props => props.width}%;
  ${props => props.top && css`top: ${props.top}%`};
  ${props => props.left && css`left: ${props.left}%`};
  ${props => props.right && css`right: ${props.right}%`};
  ${props => props.bottom && css`bottom: ${props.bottom}%`};
  
  ${props => props.reverse && css`transform: rotate(180deg)`};
  
  ${props => props.flicker && css`
    opacity: 0.3;

    ${flicker};
    animation-name: flicker;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-delay: ${props.delay || 0}s;
    animation-duration: ${props.duration || 2}s;
  `};
  
  ${props => props.fluctuation && css`
    opacity: 0.3;
    transform: scale(1); 
   
    ${fluctuation};
    animation-name: fluctuation, flicker;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
    animation-delay: ${props.delay || 0}s;
    animation-duration: ${props.duration || 1}s;
  `};

  ${props => props.rotate && css`
    ${rotate};
    animation-name: fluctuation, flicker, rotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
    animation-delay: ${props.delay || 0}s;
    animation-duration: ${props.duration || 1}s;
  `}
`;

export const Body = styled.div`
  position: relative;
  width: 100%;
`;

export const Images = styled.div`
  position: ${props => (props.position || 'relative')};
  width: 100%;
  height: ${({ theme }) => theme.windowHeight * (6 / 10)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
