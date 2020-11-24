import styled from 'styled-components';
import { palette } from '@S/index';

export const StyledApplyLink = styled.div`
  width: 100%;
  height: 35vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  background-image: linear-gradient(41deg,
    ${palette.BLUE_PASTEL} 0%, ${palette.GREEN_PASTEL} 25%, ${palette.PINK_PASTEL} 50%, ${palette.YELLOW20_PASTEL} 75%, mediumpurple 100%
  );
`;

export const Link = styled.div`
  margin: 0;
  font-size: 4rem;
  font-weight: bolder;
  color: ${palette.BLACK_NEWTRO};
  cursor: pointer;
`;