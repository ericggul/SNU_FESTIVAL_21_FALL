import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;
  align-items: center;
  ${FlexCenterStyle};
  width: ${props => props.width}px;
  flex-direction: row;
`;

export const ArrowButton = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.palette.WHITE};
  cursor: pointer;
  user-select: none;
  margin: 0 1.5rem;
  text-shadow: 0 0 5px white;

  @keyframes arrowAnimate{
    from{
      transform: translateX(0);
    } 
    to{
      transform: translateX(2px);
    }
  }

`;

export const StyledCarousel = styled.div`
  ${FlexCenterStyle};
  border-radius: 20px;
`;

export const Box = styled.div`
  width: ${props => props.itemWidth}px;
  height: ${props => props.itemWidth}px;
  ${FlexCenterStyle};
  border-radius: 20px;
  border: 0.4px solid white;
  box-shadow: 0 0 0.8rem rgba(255,255,255,0.5);

  transform: perspective(100px);

  @keyframes imageChange{
    from{
      transform: translate3d(0, 0, -200px);
    } 
    to{
      transform: translate3d(0);
    }
  }

  animation: imageChange 0.5s;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
`;
