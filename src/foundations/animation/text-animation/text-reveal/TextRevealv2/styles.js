import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledTextReveal = styled.div`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: white;
    transition: opacity 1s;

    ${media.greaterThan('medium')`
        font-size: 1.2rem;
        font-weight: normal;
        text-align: left;
  `};
`;
