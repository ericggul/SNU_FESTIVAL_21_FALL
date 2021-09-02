import styled from 'styled-components';
import { appear } from '@C/jabti/detail/JabtiDetail/styles';
import { FlexCenterStyle } from '@S/responsive/display';

export const LinkSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: row;

  ${appear};
  opacity: 0;
  animation-delay: 1.5s;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 8rem;
  padding: 0 1rem;
  cursor: pointer;

  
  img {
    width: 2.8rem;
    height: 2.8rem;
    margin: 0.3rem 2.6rem;
  }
`;
