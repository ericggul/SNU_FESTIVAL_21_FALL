import styled from 'styled-components';
import { appear } from '@C/jabti/detail/JabtiDetail/styles';
import { FlexCenterStyle } from '@S/responsive/display';

export const RecommendSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  ${appear};
  animation-delay: 1.5s;
  opacity: 0;
`;

export const RecommendRow = styled.div`
  ${FlexCenterStyle};
  margin-top: 0.5rem;
  flex-direction: row;


`;

export const RecommendBox = styled.div`

  ${FlexCenterStyle};
  flex-direction: column;
  margin: 2rem 0.8rem;
  position: relative;
  width: 13rem;
  height: 5.7rem;
  ${({ expandHeight }) => expandHeight && 'height: 8.5rem'};
  border-radius: 1.2rem;
  text-align: center;
`;

export const RecommendBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.75);
  border-radius: 1.2rem;
  filter: blur(0.3rem);
  z-index: -3;
`;

export const RecommendIndicator = styled.div`
  font-size: 1.25rem;
  color: black;
  font-weight: 600;
  text-shadow: 0 3px 6px rgba(0,0,0,0.5);
`;

export const RecommendResult = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-shadow: 0 3px 6px rgba(0,0,0,0.5);
  color: ${({ color }) => color};
  text-decoration: none;
`;

export const RecommendMap = styled.div`
  ${FlexCenterStyle};
`;

export const RecommendBoxMap = styled.div`
  cursor: pointer;
  ${FlexCenterStyle};
  flex-direction: column;
  margin: 0;
  margin-bottom: 1rem;
  position: relative;
  width: 17rem;
  height: 3.9rem;
  border-radius: 1.2rem;
  text-align: center;
  flex-direction: row;
`;

export const RecommendBackgroundMap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.75);
  border-radius: 1.2rem;
  filter: blur(0.3rem);
  z-index: -3;
  
`;

export const RecommendIndicatorMap = styled.div`
  font-size: 1.25rem;
  color: black;
  font-weight: 600;
  text-shadow: 0 3px 6px rgba(0,0,0,0.5);
`;

export const RecommendIcon = styled.img`
  width: 1.5rem;
  height: auto;
  margin-right: 0.5rem;
`;
