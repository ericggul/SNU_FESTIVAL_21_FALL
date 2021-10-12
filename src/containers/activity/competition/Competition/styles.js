import styled from 'styled-components';

export const StyledCompetition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: ${({ theme }) => theme.windowHeight}px;
  background-image: linear-gradient(to top, 
    ${({ theme }) => theme.palette.BACKGROUND_LIGHTPINK}, 
    ${({ theme }) => theme.palette.BACKGROUND_LIGHTORANGE} 50%, 
    ${({ theme }) => theme.palette.BACKGROUND_LIGHTPINK} 100%);
`;

export const Body = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  
  display: flex;
  flex-direction: column;

  padding: 3rem 1rem;
  box-sizing: border-box;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const TabItem = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0 .4rem;
  padding: .2rem .1rem;
  color: ${props => (props.isSelected ? props.theme.palette.HIGHLIGHT_RED : props.theme.palette.TEXT_GRAY)};
  border-bottom: ${props => (props.isSelected && `2px solid ${props.theme.palette.HIGHLIGHT_RED}`)};
  transition: color 0.2s;
`;
