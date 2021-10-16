import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';

export const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  max-width: 750px;
  height: ${({ theme }) => theme.windowHeight - 65}px;
  ${FlexCenterStyle};
  flex-direction: column;
  background-image: linear-gradient(to top, #abebe3, #d8f1da 50%, #abebe3 100%);
  color: #707070;
`;

export const Poster = styled.img`
  width: 80%;
  height: auto;
  max-width: 500px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 1.75rem;
  font-weight: 600;
  margin: 1rem;
`;

export const Descp = styled.div`
  width: 80vw;
  max-width: 600px;
  text-align: left;
  font-size: .9rem;
  font-weight: 300;
`;

export const Contents = styled.div`
  display: flex;
  width: 80vw;
  text-align: left;
  flex-direction: column;
  margin-top: 1rem;
`;

export const Header = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: .2rem;
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Info = styled.div`
  font-size: 1.1rem;
  font-weight: 300;
`;
// TODO: 중복 코드
export const Button = styled.div`
  z-index: ${({ theme }) => theme.zIndex.base + 1};
  ${FlexCenterStyle};

  width: 20rem;
  height: 4rem;
  margin-top: 2rem;
  
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  background-color: #52cbb2;
  
  cursor: pointer;
  border-radius: 2rem;
  box-shadow: 0 .3rem .6rem rgba(0, 0, 0, 0.15);
`;
