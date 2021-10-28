import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const Container = styled.div`
  ${FlexCenterStyle};
  margin: 2rem 0;
  width: 100%;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  ${FlexCenterStyle};
  flex-direction: row;
  margin-top: 1rem;
`;

export const Pointer = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin: .5rem 1rem;
  cursor: pointer;
  color: white;
  opacity: 0;
  ${({ selected }) => selected && 'opacity: 1;'}
`;
export const Header = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin: .5rem 1rem;
  cursor: pointer;
  color: white;
  opacity: 0.5;
  ${({ selected }) => selected && 'opacity: 1;'}
`;
