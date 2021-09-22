import React from 'react';
import { Link } from 'react-router-dom';
import useModal from '@U/hooks/useModal';
import MapGuide from '@F/modal/content/MapGuide';
import PropTypes from 'prop-types';
import Map from '@I/jabti/MapLogo.svg';
import * as S from './styles';

function DetailRecommend({ colorCode, colorName, spot }) {
  const revisedColor = colorName.replace(' ', '+');
  const searchSite = `https://www.google.com/search?q=${revisedColor}`;

  const { modalComponent: mapModalComponent, setIsModalOpen: setIsMapModalOpen } = useModal(MapGuide);

  const viewMap = () => {
    setIsMapModalOpen(true);
  };

  return (
    <S.RecommendSection>
      <S.RecommendRow>
        <S.RecommendBox expandHeight={colorName.length > 15}>
          <S.RecommendBackground />
          <S.RecommendIndicator>나의 학교 스팟</S.RecommendIndicator>
          <S.RecommendResult color={colorCode}>{spot}</S.RecommendResult>
        </S.RecommendBox>
        <S.RecommendBox expandHeight={colorName.length > 15}>
          <S.RecommendBackground />
          <S.RecommendIndicator>나의 별 색깔</S.RecommendIndicator>
          <S.RecommendResult color={colorCode}>{colorName}</S.RecommendResult>
        </S.RecommendBox>
      </S.RecommendRow>
      <S.RecommendMap onClick={viewMap}>
        <S.RecommendBoxMap>
          <S.RecommendBackgroundMap />
          <S.RecommendIcon src={Map} />
          <S.RecommendIndicatorMap>
            지도 보러가기
          </S.RecommendIndicatorMap>
        </S.RecommendBoxMap>
      </S.RecommendMap>
      {mapModalComponent}
    </S.RecommendSection>
  );
}
export default DetailRecommend;

DetailRecommend.propTypes = {

};
