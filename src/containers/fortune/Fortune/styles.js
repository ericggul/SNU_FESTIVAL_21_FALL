import styled from 'styled-components';
import { rgba } from 'polished';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledFortune = styled.div`
    margin-bottom: 8rem;
    width: ${({ theme }) => theme.windowWidth}px;
    // height: ${({ theme }) => theme.windowHeight}px;
    ${FlexCenterStyle};
    flex-direction: column;
`;

export const Top = styled.div`
    ${FlexCenterStyle};
    margin-top: 1rem;
    flex-direction: row;
    width: 100%;
    position: relative;
`;

export const Login = styled.div`
    margin-left: auto;
    margin-right: 1rem;
    width: 90px;
    height: 35px;
    border-radius: 3.5px;
    ${FlexCenterStyle};
    text-align: center;
    background: ${({ theme }) => theme.palette.FORTUNE_BLUE};
    color: white;
    font-size: 14px;
    cursor: pointer;
`;

export const CookieContainer = styled.div`
    margin-top: -2rem;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    max-width: 500px;
    position: relative;
`;

export const Image = styled.img`
    position: absolute;
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export const Text = styled.div`
    font-family: 'Product Sans', sans-serif;

    text-align: center;
    margin-top: ${props => props.top}px;
    font-size: 4.5rem;
    font-weight: normal;
    color: ${({ theme }) => theme.palette.FORTUNE_BLUE};
    display: inline-block;
    ${FlexCenterStyle};
    p{
        margin: 0;
        padding: 0;
        float: left;
        text-align: center;

        &:nth-child(2){
            color: ${({ theme }) => theme.palette.FORTUNE_RED};
        }
        &:nth-child(3){
            color: ${({ theme }) => theme.palette.FORTUNE_YELLOW};
        }
        &:nth-child(5){
            color: ${({ theme }) => theme.palette.FORTUNE_GREEN};
        }
        &:nth-child(6){
            color: ${({ theme }) => theme.palette.FORTUNE_RED};
        }
        &:nth-child(7){
            color: ${({ theme }) => theme.palette.FORTUNE_YELLOW};
        }
    }
`;

export const SearchContainer = styled.div`
    margin-top: 5rem;
    ${({ theme }) => theme.windowWidth > 768 && 'margin-top: 1rem;'}
    ${FlexCenterStyle};
    height: 3rem;
    width: 93%;
    max-width: 600px;
    border-radius: 1.5rem;
    border: 1px solid #DADCE0;
    position: relative;
`;

export const LogoContainer = styled.div`
    width: 3rem;
    height: 100%;
`;

export const SearchLogo = styled.img`
    height: 70%;
    margin-top: 15%;
`;

export const InputBox = styled.input`
    height: calc(100% - 2px);
    width: calc(100% - 5rem);
    outline: 0;
    border: 0px;
    border-top: 1px solid #DADCE0;
    border-bottom: 1px solid #DADCE0;
    &::placeholder {
    color: ${props => rgba(props.color || props.theme.palette.GRAY80, 0.4)};
  }
`;

export const ButtonContainer = styled.div`
    width: 100%;
`;

export const Button = styled.div`
  ${FlexCenterStyle};
  margin-top: 1.5rem;
  ${({ theme }) => theme.windowWidth > 768 && 'margin-top: 1rem;'}
  margin-bottom: 20px;
  background: #F8F9FA;
  border-radius: 4px;
  color: #3c4043;
  font-size: 14px;
  line-height: 27px;
  height: 36px;
  width: 140px;
  padding: 0 15px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  border-radius: 1px solid #F8F9FA;

  &:hover{
      border-radius: 1px solid #AAA;
  }
`;

export const Notification = styled.div`

`;
