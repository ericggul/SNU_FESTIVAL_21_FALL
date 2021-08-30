import React from 'react';
import MoonCharacter from '@F/MoonCharacter';
import GoodsImage from '@/foundations/images/GoodsImage';
import PropTypes from 'prop-types';
import * as S from './styles';

function GoodsBox({
  image, name, price, i,
}) {
  return (
    <S.StyledGoodsBox>
      <S.Window><GoodsImage src={image} alt="창" borderRadius="5px" /></S.Window>
      <S.Texts>
        <S.Left>
          <MoonCharacter number={i} boxShadow={false} />
          <S.Name>{name}</S.Name>
        </S.Left>
        <p>{price}</p>
      </S.Texts>
    </S.StyledGoodsBox>
  );
}
export default GoodsBox;

GoodsBox.propTypes = {

};
