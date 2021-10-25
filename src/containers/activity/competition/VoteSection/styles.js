import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledVoteSection = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

export const ItemSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  margin: 1rem 0;
`;

export const Item = styled.div`
  width: 100%;
  padding: 1rem;
  position: relative;
  box-sizing: border-box;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1.4rem;
  box-shadow: 0 0 .4rem rgba(0, 0, 0, .16);
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  p {
    font-size: 1rem;
    text-align: left;
    font-weight: 600;
    margin: 0;
    margin: 0.2rem 0.3rem;
    margin-right: 2.2rem;
    line-height: 1.3;
    word-break: keep-all;
  }
  p:nth-of-type(1) {
    margin-top: 0.6rem;
    color: ${({ theme }) => theme.palette.HIGHLIGHT_RED};
  }
  p:last-of-type {
    font-size: 0.8rem;
    font-weight: 300;
    color: ${({ theme }) => theme.palette.TEXT_GRAY};
  }
`;

export const LikeButton = styled.div`
  position: absolute;
  top: 0.6rem;
  right: 0.1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.75rem;
  height: 1.75rem;
  cursor: pointer;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const SubmitSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  & p {
    margin: .7rem;
    font-size: 0.75rem;
    font-weight: 300;
    text-align: center;
    color: #828282;
  }
`;

export const SubmitButton = styled.div`
  ${FlexCenterStyle};
  width: 50%;
  max-width: 300px;
  height: 4rem;
  margin-top: 2rem;
  
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: 2rem;
  background: ${({ theme }) => theme.palette.COMPETITION_RED};
  color: white;
  cursor: pointer;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  
  ${props => props.isDisabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `};
`;

export const Pagination = styled.p`
  ${FlexCenterStyle};
  color: white;
  font-weight: 500;
  font-size: 1rem;
  
  span:first-of-type {
    padding-right: 1rem;
    cursor: pointer;
    font-size: 1.3rem;
  }
  
  span:last-of-type {
    padding-left: 1rem;
    cursor: pointer;
    font-size: 1.3rem;
  }
`;
