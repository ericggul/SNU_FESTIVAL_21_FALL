import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';

const disappear = css`
  @keyframes disappear {
    from { opacity: 1; }
    to { opacity: 0; }
  } 
`;

export const StyledMissionCard = styled.div`
  position: relative;

  min-width: 264px;
  width: 70vw;

  @media (orientation: landscape) {
    width: 60vw;
    height: 100%;
  }
  
  @media (orientation: portrait) {
    width: 80vw;
    height: auto;
  }
  
  ${disappear};
  animation: disappear 1.5s linear reverse backwards;
  ${FlexCenterStyle};
  background: ${({ theme }) => theme.palette.CREAM_PURPLE};
`;

export const Image = styled.img`
  width: 80%;
  height: auto;
  margin: auto;
  left: 0;
  right: 0;
  margin-top: 3rem;

  @keyframes fun{
    0%{ transform: rotate(-4deg);}
    30%{transform: rotate(5deg) translateY(-10px);
    filter: brightness(150%);
    }
    33%{transform: translateY(0);
    }
    35%{transform: rotate(-3deg);
    filter: brightness(100%);}
    38%{transform: rotate(3deg);}
    40%{transform: rotate(-2.5deg);}
    42%{transform: rotate(2deg);}
    44%{transform: rotate(-2deg);}
    46%{transform: rotate(0deg);}
    100%{transform: rotate(-4deg);}
  }
  animation: fun 5s infinite;
`;

export const Contents = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.palette.HOME_PURPLE};
`;

export const Header = styled.div`
  
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: .9rem;
  text-shadow: 0 .3rem .6rem rgba(0, 0, 0, .16);
`;

export const SubHeader = styled.div`
margin-top: 2.2rem;
  font-size: 1rem;
  font-weight: 300;
  font-type: italic;
  color: transparent;
  text-shadow: 0 0 .15rem ${({ theme }) => theme.palette.HOME_PURPLE};
`;

export const PinkText = styled.span`
  color: ${({ theme }) => theme.palette.CHOCO_PURPLE};

`;

export const Text = styled.div`
  ${FlexCenterStyle};
  font-size: .9rem;
  font-weight: 500;
`;

export const Button = styled.div`
  margin-top: 1.3rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  padding: .5rem 1.9rem;
  color: white;
  background: ${({ theme }) => theme.palette.SOFTPASTEL_PURPLE};
  box-shadow: 0 .3rem .6rem rgba(0, 0, 0, 0.16);
`;
