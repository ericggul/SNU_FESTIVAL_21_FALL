import styled from 'styled-components';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledActivity = styled.div`

`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  width: 80vw;
  height: 10rem;
  margin: 1.5rem 0;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: ${props => props.backgroundColor};
  
  ${HoverStyle};
  &:hover {
    box-shadow: 0 0 1rem rgba(33, 33, 33, .3);
  }
`;

export const ItemTitle = styled.p`
  margin: 0;
  color: white;
  font-size: 1.8rem;
  font-weight: lighter;
`;
