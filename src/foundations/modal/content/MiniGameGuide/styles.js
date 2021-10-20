import styled from 'styled-components';
import { rgba } from 'polished';

export const MiniGameGuideBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 65%;
  min-width: 264px;
  height: 100%;
  
  background-color: white;
  border-radius: .5rem;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .16);
  
  padding: 5px 8px 6px 7px;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100%;
  
  padding: 1.5rem 0;
  box-sizing: border-box;
  
  color: #4f30b3;

  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;

  }

  p:nth-of-type(2) {
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 0.6rem;
    margin-bottom: 0.2rem;
  }

`;

export const Image = styled.img`
  width: 15px;
  height: 15px;
  align-self: flex-end;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin-top: 1rem;
  width: 164px;
  height: 36px;
  border-radius: 18px;
  background-color: ${rgba('#aeb0cc', 0.4)};
  color: ${({ theme }) => theme.palette.GRAY80};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
`;
