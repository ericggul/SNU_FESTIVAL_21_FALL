import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledLoadingMascot = styled.div`
  width: 100%;
  height: 100%;
  max-width: 200px;
  height: auto;

  ${media.lessThan('medium')`
    max-width: 150px;
  `};
  
  img {
    width: 100%;
  }
`;
