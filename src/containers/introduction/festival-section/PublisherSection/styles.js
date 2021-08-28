import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledPublisherSection = styled.div`
  ${FlexCenterStyle};
  
  color: white;
  font-size: 1rem;
  padding: 2rem 0 3rem 0;
  
  span {
    cursor: pointer;
  }
  
  & > p {
    line-height: 1.8;
    align-self: flex-start;
  }
  
  & > div {
    margin: 0 1rem;
    border-left: 1px solid white;
    height: 5rem;
  }
`;
