import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './styles';

function DetailRecommend({ colorCode, colorName, spot }) {
  const revisedColor = colorName.replace(' ', '+');
  const searchSite = `https://www.google.com/search?q=${revisedColor}`;
  return (
    <S.RecommendSection>
      <S.RecommendBox expandHeight={colorName.length > 15}>
        <S.RecommendBackground />
        <S.RecommendIndicator>나의 학교 스팟</S.RecommendIndicator>
        <S.RecommendResult color={colorCode}>{spot}</S.RecommendResult>
      </S.RecommendBox>
      <S.RecommendBox expandHeight={colorName.length > 15}>
        <S.RecommendBackground />
        <S.RecommendIndicator>나의 별 색깔</S.RecommendIndicator>
        <a href={searchSite} style={{ textDecoration: 'none' }}>
          <S.RecommendResult color={colorCode}>{colorName}</S.RecommendResult>
        </a>
      </S.RecommendBox>
    </S.RecommendSection>
  );
}
export default DetailRecommend;

DetailRecommend.propTypes = {

};
