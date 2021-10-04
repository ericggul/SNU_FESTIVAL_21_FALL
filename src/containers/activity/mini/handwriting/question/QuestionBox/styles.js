import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';
import { rgba } from 'polished';

export const Content = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.base};
  
  ${media.lessThan('medium')`
    width: 80%;
    margin-top: -10rem;
  `};
`;

export const Question = styled.div`
  ${FlexCenterStyle};
  max-width: 550px;
  max-height: 550px;
  border-radius: 15px;
  background: ${({ theme }) => theme.palette.HANDWRITING_PURPLE};
  border: 1px solid white;
  color: white;
  
  ${media.lessThan('medium')`
    width: 80vw;
    height: 80vw;
  `};
  
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

export const Answer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  margin-top: 2rem;
`;

export const InputBox = styled.input`
  outline: 0;
  width: 80%;
  height: 100%;
  padding: 10px 8px;
  border-radius: 13px;
  border: solid 1px #ffffff;
  background-color: rgba(255, 255, 255, 0.31);

  color: ${props => props.color || props.theme.palette.GRAY80};
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  
  &::placeholder {
    color: ${props => rgba(props.color || props.theme.palette.GRAY80, 0.4)};
  }
  
  margin-right: 1rem;
`;

export const Button = styled.div`
  ${FlexCenterStyle};
  width: 20%;
  height: 100%;
  background-color: white;
  padding: 10px 0;
  border-radius: 13px;
  
  color: ${({ theme }) => theme.palette.PURPLE70};
  font-weight: bold;
  
  cursor: pointer;
`;
