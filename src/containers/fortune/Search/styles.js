import styled from 'styled-components';
import { rgba } from 'polished';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledSearch = styled.div`
margin-bottom: 8rem;
    width: ${({ theme }) => theme.windowWidth}px;
    // height: ${({ theme }) => theme.windowHeight}px;
    ${FlexCenterStyle};
    flex-direction: column;
`;

export const Text = styled.div`
    text-align: center;
    font-family: 'Product Sans', sans-serif;
    margin-top: 1rem;
    font-size: 2.5rem;
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
    margin-top: 0.9rem;
    ${({ theme }) => theme.windowWidth > 768 && 'margin-top: 1rem;'}
    ${FlexCenterStyle};
    height: 3.5rem;
    width: 93%;
    max-width: 600px;
    border-radius: 2rem;
    // border: 1px solid #DADCE0;
    position: relative;
    box-shadow: 0 2px 5px rgba(60, 64, 67, 0.16);
`;

export const LogoContainer = styled.div`
    width: 3rem;
    height: 100%;
`;

export const SearchLogo = styled.img`
    height: 60%;
    margin-top: 20%;
`;

export const InputBox = styled.input`
    height: calc(100% - 6px);
    width: calc(100% - 5rem);
    outline: 0;
    border: 0px;
    font-size: 1.3rem;
    &::placeholder {
    color: ${props => rgba(props.color || props.theme.palette.GRAY80, 0.4)};
  }
`;

export const MainContainer = styled.div`
  ${FlexCenterStyle};
  width: 88vw;
  max-width: 550px;
  align-items: flex-start;
  flex-direction: column;
  margin: 1rem 1rem;
`;

export const Result = styled.div`
  color: #70757a;
  line-height: 43px;
  text-align: left;
  font-size: 12px;
`;

export const Component = styled.div`
  ${FlexCenterStyle};
  margin-top: 12px;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  text-decoration: none;
`;

export const Link = styled.div`
  font-size: 12px;
  color: #202124;
`;

export const Header = styled.div`
  color: #1a0dab;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  margin-top: 1px;
  margin-bottom: 2px;
`;
export const Body = styled.div`
  font-size: 12px;
  line-height: 1.4;
`;
