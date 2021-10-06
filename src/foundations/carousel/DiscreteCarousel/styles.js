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
  position: relative;

  transform: perspective(100px);

  @keyframes imageChange{
    from{
      transform: rotateY(180deg);
    } 
    to{
      transform: rotateY(0);
    }
  }

  animation: imageChange 0.5s;

`;

export const Skeleton = styled.div`
  position: absolute;
  margin: auto;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  color: white;
  font-weight: 600;
  font-size: 1.3rem;
  ${FlexCenterStyle};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
`;
