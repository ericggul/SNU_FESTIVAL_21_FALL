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
  width: 30rem;
  height: 30rem;

  // @media (orientation: landscape) {
  //   width: 40vw;
  //   height: 90vh;
  // }
  
  // @media (orientation: portrait) {
  //   width: 90vw;
  //   height: auto;
  // }
  
  ${disappear};
  animation: disappear 1s linear reverse backwards;
  ${FlexCenterStyle};
  background: ${({ theme }) => theme.palette.GUIDE_PURPLE};
  box-shadow: 0 0 2rem .3rem ${({ theme }) => theme.palette.GUIDE_SHADOW_PURPLE};
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
  color: ${({ theme }) => theme.palette.GUIDE_TEXT_PURPLE};
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
  text-shadow: 0 0 .1rem ${({ theme }) => theme.palette.GUIDE_TEXT_PURPLE};
`;

export const Text = styled.div`
  ${FlexCenterStyle};
  font-size: .9rem;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  ${FlexCenterStyle};
  margin: .5rem 0;
`;

export const Button = styled.div`
  margin: 1rem;
  margin-top: 1.3rem;
  margin-bottom: 1.5rem;
  width: 5rem;
  padding: .4rem .8rem;
  // font-weight: 600;
  color: white;
  box-shadow: inset 0 0 1rem ${({ theme }) => theme.palette.CREAM_PURPLE};
`;

export const ButtonCancel = styled.div`
  margin: 1rem;
  margin-top: 1.3rem;
  margin-bottom: 1.5rem;
  width: 5rem;
  padding: .4rem .8rem;
  // font-weight: 600;
  color: white;
  box-shadow: inset 0 0 1rem ${({ theme }) => theme.palette.GUIDE_TEXT_PURPLE};
`;
