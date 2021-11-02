import styled from 'styled-components';
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
  
`;

export const SliderContent = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 1rem 0;
  ${({ theme }) => theme.windowWidth > 768 && 'margin: 0.5rem 0;'}
  ${FlexCenterStyle};
  z-index:${({ theme }) => theme.zIndex.fullScreen};
`;

export const Answer = styled.div`
  ${FlexCenterStyle};
  align-items: center;
  width: ${props => props.width}px;
  height: 2.3rem;
  margin: 1.3rem;
  ${({ theme }) => theme.windowWidth > 768 && 'margin: 1rem;'}
  z-index:${({ theme }) => theme.zIndex.fullScreen};
`;

export const InputBox = styled.input`
  outline: 0;
  width: 50%;
  height: 2.3rem;
  border-radius: 1rem;
  border: solid 1px #ffffff;
  background-color: white;

  color: ${props => props.theme.palette.HANDWRITING_INPUT};
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  
  &::placeholder {
    color: ${props => props.theme.palette.HANDWRITING_INPUT};
  }
  
  margin-right: 1.2rem;
  box-shadow: 0 0 0.5rem white;
`;

export const Button = styled.div`
  ${FlexCenterStyle};
  width: 4.5rem;
  height: 2.3rem;
  background-color: white;
  border-radius: 1.5rem;
  
  color: ${({ theme }) => theme.palette.HANDWRITING_HANDLE};
  font-size: 1rem;
  font-weight: 600;
  
  cursor: pointer;
  box-shadow: 0 0 0.5rem white;
`;

export const Rules = styled.div`
  align-items: center;
  text-align: center;
  font-size: .8rem;
  opacity: .8;
  bottom: 0;
  margin-top: auto;
  margin-bottom: 0;
  margin-right: 1.5rem;
  color: white;
  z-index:${({ theme }) => theme.zIndex.fullScreen};
`;

export const TempContainer = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;

export const RulesContainer = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: .8rem;
  opacity: .8;
  bottom: 0;
  margin-top: auto;
  margin-bottom: 0;
  margin-right: 1.5rem;
  color: white;
  z-index:${({ theme }) => theme.zIndex.fullScreen};
`;

export const AskContainer = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: .8rem;
  opacity: .8;
  margin-top: 1rem;
  margin-left: 1.5rem;
  color: white;
`;

export const Kakao = styled.img`
  ${FlexCenterStyle};
  height: 3rem;
  width: auto;
  margin-bottom: .5rem;
`;

export const AskText = styled.div`
  ${FlexCenterStyle};
`;
