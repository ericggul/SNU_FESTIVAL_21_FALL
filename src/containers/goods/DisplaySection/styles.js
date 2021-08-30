import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledDisplaySection = styled.div`
  display: flex;
  flex-direction: column;
  ${media.greaterThan('medium')`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `};
  width: 100%;

  padding-top: 2rem;
`;

export const Item = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 3rem;
  
  ${media.greaterThan('medium')`
    width: 47%;
  `};
  
  cursor: pointer;
  transition: transform 0.5s;
  // &:hover {
  //   transform: scale(1.05);
  // }
`;

export const Window = styled.div`
  width: 100%;
  height: auto;
`;

export const Texts = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  font-size: 1.5rem;
  font-weight: 600;
`;
export const Name = styled.div`
  margin-left: 0.5rem;
`;
