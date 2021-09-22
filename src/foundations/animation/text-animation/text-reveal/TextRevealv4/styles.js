import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledTextReveal = styled.div`
    margin: 0;
    padding: 0;
    color: white;
    transition: opacity 1s;
    text-align: center;

    ${media.greaterThan('medium')`
        text-align: center;
  `};
`;
