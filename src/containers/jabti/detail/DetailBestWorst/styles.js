import styled from 'styled-components';
import { appear } from '@C/jabti/detail/JabtiDetail/styles';
import { FlexCenterStyle } from '@S/responsive/display';

export const DetailBestWorst = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  ${appear};
  animation-delay: 1.5s;
  opacity: 0;
`;

export const RecommendRow = styled.div`
  ${FlexCenterStyle};
  flex-direction: row;


`;

export const RecommendBox = styled.div`
  cursor: pointer;
  ${FlexCenterStyle};
  flex-direction: column;
  margin: -2rem 0.8rem;
  margin-bottom: 2rem;
  position: relative;
  width:  8rem;
  height: 3rem;
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
  font-size: 1rem;
  color: white;
  font-weight: 200;
  // text-shadow: 0 3px 6px rgba(0,0,0,0.5);
`;

export const RecommendResult = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  // text-shadow: 0 3px 6px rgba(0,0,0,0.5);
  color: ${({ color }) => color};
  text-decoration: none;
`;
