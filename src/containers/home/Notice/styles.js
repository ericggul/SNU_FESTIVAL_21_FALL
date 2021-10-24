import styled from 'styled-components';
import media from 'styled-media-query';
import { FlexCenterStyle } from '@S/responsive/display';

export const NoticeWrapper = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
 
  ${media.greaterThan('medium')`
    top: 85px;
  `};
  
  width: 100%;
  height: 36px;
  
  ${FlexCenterStyle};
  z-index: ${({ theme }) => theme.zIndex.base};
  font-size: 12px;

  @keyframes appear{
    from{opacity: 0;}
    to{opacity: 1;}
  }
  animation: appear 3s linear backwards;
  animation-delay: 3s;
`;

export const Notice = styled.div`

  overflow: hidden;
  width: 346px;
  @media screen and (max-width: 375px) {
    width: 300px;
  }
  
  height: 100%;
  background-color: white;
  padding: 11px 15px 11px 15px;
  box-sizing: border-box;
  border-radius: 18px;
  box-shadow: 0 3px 6px 0 rgba(147, 151, 214, 0.45);
  border: solid 1px ${({ theme }) => theme.palette.PURPLE50};

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  cursor: pointer;

  p {
    text-align: center;
    margin: 0;
    width: 85%;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.PURPLE50};

    @keyframes passby{
      0%{transform: translateY(-20px); opacity: 1;}
      20%{transform: translateY(0px); opacity: 1;}
      80%{transform: translateY(0px); opacity: 1;}
      100%{transform: translateY(20px); opacity: 1;} 
    }
  
    animation: passby 3s linear infinite;
  }
`;

export const Indicator = styled.div`
  width: 15%;
  font-weight: 500;
  ${FlexCenterStyle};
  color: #4049DB;

  @keyframes passby{
    0%{transform: translateY(-20px); opacity: 1;}
    20%{transform: translateY(0px); opacity: 1;}
    80%{transform: translateY(0px); opacity: 1;}
    100%{transform: translateY(20px); opacity: 1;} 
  }

  animation: passby 3s linear infinite;
`;

export const TimeTable = styled.img`
  min-width: 264px;
  max-width: 800px;

  @media (orientation: landscape) {
    width: 100%;
    height: 100%;
  }
  
  @media (orientation: portrait) {
    width: 100%;
    height: auto;
  }
`;
