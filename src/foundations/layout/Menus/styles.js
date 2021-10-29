import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledMenus = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.windowHeight - 65}px;
  position: relative;
  top: 0;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.8rem;
  top: 0;
  margin-top: 80px;
  margin-left: 2.5rem;
  ${({ theme }) => theme.windowWidth > 768 && 'margin-left: 4rem;'}
`;

export const Sector = styled.div`
  display: flex;
  margin: .5rem .9rem;
  color: white;
  z-index: ${({ theme }) => theme.zIndex.header};
  text-align: left;
  opacity: 1;

  @keyframes appear-smooth{
    from{opacity: 0;}
    to{opacity: 1;}
  }

  animation: appear-smooth 2s linear backwards;
`;

export const LeftSector = styled.div`
  display: flex;
  font-size: 1.8rem;
  width: 5.8rem;
  font-weight: 700;
  margin-right: .5rem;
  margin-bottom: .3rem;
  cursor: pointer;
`;

export const RightSector = styled.div`
  font-size: 1.3rem;
  display: grid;
  grid-template-columns: 8rem 0.1rem 10rem;
  cursor: pointer;
`;

export const RightComp = styled.div`
  display: flex;
  text-align: left;
  margin: .1rem;
  margin-left: .8rem;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const Line = styled.div`
  display: flex;
  ${FlexCenterStyle};
  text-align: center;
  font-size: 1.2rem;
  margin-top: -.15rem;
`;

export const SignButton = styled.div`
  position: fixed;
  bottom: 2rem;
  z-index: ${({ theme }) => theme.zIndex.header + 1};
  ${({ theme }) => (theme.windowWidth > 768 ? 'right: 5vw' : 'left: 3.4rem')};
  
  display: flex;
  flex-direction: column;
  cursor: pointer;

  
  p {
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
    margin: 0;
    margin-top: .8rem;
    padding: 0;
  }
  z-index: ${({ theme }) => theme.zIndex.header};
`;

export const CharacterEvent = styled.div`
  position: fixed;
  text-align: right;
  z-index: ${({ theme }) => theme.zIndex.header + 1};
  ${({ theme }) => (theme.windowWidth > 768 ? 'bottom: 9rem' : 'bottom: 2rem')};
  ${({ theme }) => (theme.windowWidth > 768 ? 'right: 5vw' : 'right: 3.4rem')};
  
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  p {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-weight: 700;
    color: white;
  }

  p:nth-of-type(1){
    font-size: 2rem;
  }
  z-index: ${({ theme }) => theme.zIndex.header};
`;

export const SignImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Stamp = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  padding-top: 0.1rem;
  padding-left: 0.5rem;
`;
