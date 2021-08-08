import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';
import { VibrateAnimation } from '@S/responsive/animation';

export const StyledGameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GameWrapper = styled.div`
  width: 100%;
  ${FlexCenterStyle};
  flex-wrap: wrap;

  margin-top: 5rem;
  ${media.lessThan('medium')`
    margin-top: 3rem;
  `};
`;

export const Game = styled.div`
  position: relative;
  width: 25%;
  ${HoverStyle};
  align-self: flex-end;
  
  ${media.lessThan('medium')`
    width: 50%;
    max-width: 150px;
  `};
  
  img:first-of-type {
    width: 100%;
  }

  @keyframes contrast{
    from{
      filter: contrast(1);
    }
    to{
      filter: contrast(1.8);
    }
  }

  ${props => css`
    animation: contrast 5s infinite alternate;
    animation-delay: ${props.delay || 0}s;
    animation-duration: ${props.duration || 5}s;
  `}
`;

export const Complete = styled.img`
  position: absolute;
  right: 0;
  bottom: 5%;
  width: 10rem;
  height: 7.5rem;
`;

export const ClearButton = styled.div`
  width: 40%;
  max-width: 250px;
  ${HoverStyle};
  ${VibrateAnimation};

  img {
    width: 100%;
  }
`;
