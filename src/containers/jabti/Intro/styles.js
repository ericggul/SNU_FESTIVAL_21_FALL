import styled, { css } from 'styled-components';
import { FlexCenterStyle, ResponsiveHeightStyle } from '@S/responsive/display';

const appear = css`
  @keyframes appear-2 {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  animation-name: appear-2;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  opacity: 0;
`;

const reverseAppear = css`
  @keyframes appear-3 {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  animation-name: appear-3;
  animation-duration: 1.2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

export const StyledIntro = styled.div`
    ${appear};
    ${FlexCenterStyle};
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    width: 100%;
    ${ResponsiveHeightStyle};
    max-width: 800px;
    max-height: 600px;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 17vh;
`;

export const HeaderSector = styled.div`

`;
export const FirstText = styled.div`
    font-size: 1.7rem;
    font-weight: 300;
    line-height: 1;
    ${({ transition }) => transition && reverseAppear};
    animation-delay: 0.5s;
`;
export const SecondText = styled.div`
    font-size: 4rem;
    font-weight: 600;
    display: inline;
`;
export const ThirdText = styled.div`
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1;
    ${({ transition }) => transition && reverseAppear};
    animation-delay: 0.3s;
`;
export const ButtonSector = styled.div`

`;
export const ButtonText = styled.div`
    font-size: 1.4rem;
    ${({ transition }) => transition && reverseAppear};
    animation-delay: 0.15s;
`;
export const Button = styled.button`
    margin-top: 0.6rem;
    width: auto;
    padding: 0.5rem 1.7rem;
    border: none;
    border-radius: 0.7rem;
    background: ${({ theme }) => theme.palette.WHITE_YELLOW};
    color: ${({ theme }) => theme.palette.DARK_PURPLE};
    box-shadow: inset -0.3rem -0.3rem 0.7rem #999;
    cursor: pointer;

    ${({ transition }) => transition && reverseAppear};
    animation-delay: 0s;
`;
