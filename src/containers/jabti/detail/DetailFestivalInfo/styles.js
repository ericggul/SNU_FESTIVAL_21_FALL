import styled from 'styled-components';
import { appear } from '@C/jabti/detail/JabtiDetail/styles';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledDetailFestivalInfo = styled.div`
  ${FlexCenterStyle};
  ${appear};
  margin: 1.5rem;
  animation-delay: 2.5s;
  opacity: 0;
  text-align: center;
  flex-direction: column;
`;

export const Logo = styled.img`
    width: 11rem;
    height: auto;
    margin: .5rem;

`;

export const Header = styled.div`
    font-size: 1.5rem;
    font-weigth: 500;
    margin: .5rem;

`;

export const Body = styled.div`
    font-weight: 300;
    margin: .5rem;
`;
