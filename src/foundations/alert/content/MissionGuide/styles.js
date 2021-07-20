import styled from 'styled-components';
import { rgba } from 'polished';

export const MissionGuideBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 65%;
  min-width: 264px;
  height: 100%;
  
  background-color: ${({ theme }) => rgba(theme.palette.PURPLE50, 0.45)};
  border: 1px solid ${({ theme }) => theme.palette.PURPLE80};
  
  padding: 5px 8px 6px 7px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 3px 0 6px 0 rgba(0, 0, 0, 0.3);
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

  background-color: ${rgba('#faf8fb', 0.95)};
  border: 1px solid ${({ theme }) => theme.palette.PURPLE80};
  
  p {
    margin: 0;
    line-height: 1.74;
  }

  p:nth-of-type(1) {
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.GRAY80};
  }
  
  p:nth-of-type(2) {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.PURPLE50};
  }
  
  p:nth-of-type(3) {
    text-align: center;
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => rgba(theme.palette.GRAY80, 0.45)};
    margin-bottom: 0.5rem;
  }
`;

export const Image = styled.img`
  width: 15px;
  height: 15px;
  align-self: flex-end;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const Stamp = styled.img`
  width: 40px;
  height: auto;
  cursor: pointer;
  margin: 0.5rem 0;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 164px;
  height: 36px;
  border-radius: 18px;
  background-color: ${rgba('#aeb0cc', 0.4)};
  color: ${({ theme }) => theme.palette.GRAY80};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
`;
