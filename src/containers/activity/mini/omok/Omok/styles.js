import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledOmok = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  overflow-x: hidden;
    
  background: ${({ theme }) => theme.palette.OMOK_PURPLE_BACKGROUND};
`;

export const Container = styled.div`
  width: 100%;
  min-height: ${({ theme }) => theme.windowHeight}px;

  ${FlexCenterStyle};
  flex-direction: column;
  ${({ theme }) => theme.windowWidth > 768 && 'flex-direction: row;'}
  text-align: center;
  color: white;
`;

export const EmphText = styled.span`
  font-weight: 700;
  font-size: 1rem;
`;

export const Sector = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  margin: 1rem 2rem;
`;

export const Board = styled.img`
  width: 60vw;
  max-width: 50vh;
  height: auto;
`;

export const Descp = styled.div`
  margin-bottom: 0rem;
  font-size: 0.9rem;
  max-width: 27rem;
  word-break: keep-all;
  font-weight: 400;
  opacity: .8;
  p{margin: 0;}
`;
export const Info = styled.div`
  margin-top: 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  p{margin: 0;}
`;

export const Links = styled.div`
  ${FlexCenterStyle};
  flex-direction: row;
  margin: 3rem;
`;

export const SingleLink = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  cursor: pointer;
`;

export const Text = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  width: 100%;
  margin-top: 0.5rem;
`;

export const Image = styled.img`
  margin-left: min(11vw, 40px);
  margin-right: 0;
  height: 22vw;
  max-height: 100px;
  width: auto;
`;

export const Button = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  background: ${({ theme }) => theme.palette.OMOK_PURPLE};
  padding: .8rem 4rem;
  border-radius: 1.7rem;
  box-shadow: 0 .3rem .6rem rgba(0, 0, 0, .16);
`;

export const BlackDot = styled.div`
  position: absolute;
  ${props => props.left && css`left: ${props.left}px;`}
  ${props => props.top && css`left: ${props.top}px;`}
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: black;
  box-shadow: .1rem .1rem .2rem rgba(0, 0, 0, .76);
`;
