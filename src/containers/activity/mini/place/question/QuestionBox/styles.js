import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';
import { rgba } from 'polished';

export const Content = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;

  width: 100vw;
  max-width: 900px;
  min-width: 0;
  overflow: hidden;
  height: 100%;
  margin: 0;
  margin-top: ${({ theme }) => theme.windowHeight * 0.1}px;
`;

export const SliderContent = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 1rem 0;
  ${FlexCenterStyle};
  z-index:${({ theme }) => theme.zIndex.fullScreen};
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.palette.PLACE_DESCRIPTION};
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Answer = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  position: relative;
  align-items: center;
  width: ${props => props.width}px;
  margin: 1rem;
  z-index:${({ theme }) => theme.zIndex.fullScreen};
`;

export const InputBox = styled.input`
  outline: 0;
  width: 65%;
  height: 2.3rem;
  border-radius: 1rem;
  border: solid 1px #ffffff;
  background-color: white;
  box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);

  color: black
  font-size: 1rem;
  font-weight: normal;
  text-align: center;
  
  &::placeholder {
    color: #707070;
  }
`;

export const Image = styled.img`
  ${props => props.width && css`width: ${props.width}px`};
  top: 3rem;
  margin: auto;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;

export const RioDescription = styled.div`
  text-align: center;
  color: black;
  font-size: 0.8rem;
  font-weight: 300;
`;
