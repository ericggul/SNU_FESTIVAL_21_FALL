import styled from 'styled-components';

export const Title = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  p {
    overflow-x: hidden;
    margin: 0;
    color: white;
    font-weight: lighter;
    
    &:first-child {
      font-size: 12px;
    }
    
    &:last-child {
      font-size: 16px;
      line-height: 1.2;
    }
  }
`;
