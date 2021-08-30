import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import Image from '@/foundations/images/Image';
import GoodsBox from '@C/goods/GoodsBox';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import Lumination2 from '@F/animation/Lumination/Lumination2';
import * as S from './styles';

function GoodsDetail({
  information, image, longImage,
}) {
  const goToForm = () => {
    EventBehavior('Goods', 'Click Goods Form', 'Click Goods Form');
    window.open('https://forms.gle/AwDogQChMh9sZN6T7', '_blank');
  };

  return (
    <S.StyledGoodsDetail>
      <HeaderContent>굿즈</HeaderContent>
      <S.Body>
        <Lumination2 width="100%" height="calc(100% + 1.5rem)" />

        <S.BasicSection>
          <GoodsBox image={image} name={information.name} price={information.price} i={information.index} />
        </S.BasicSection>
        <S.Hr />
        <S.Image><Image src={longImage} alt="굿즈" /></S.Image>

        <S.Button onClick={goToForm}>굿즈 신청하러 가기</S.Button>
      </S.Body>
    </S.StyledGoodsDetail>
  );
}
export default GoodsDetail;

GoodsDetail.propTypes = {
  information: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    index: PropTypes.number,
  }).isRequired,
  image: PropTypes.string.isRequired,
  longImage: PropTypes.string.isRequired,
};
