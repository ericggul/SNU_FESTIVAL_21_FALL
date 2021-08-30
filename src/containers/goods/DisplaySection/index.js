import React from 'react';
import Glass from '@I/goods/glass.jpg';
import SealSticker from '@I/goods/seal-sticker.png';
import Calendar from '@I/goods/calendar.png';
import StickerPack from '@I/goods/sticker-pack.png';
import MoonCharacter from '@F/MoonCharacter';
import { useHistory } from 'react-router';
import Image from '@F/Image';
import * as S from './styles';

function DisplaySection() {
  const history = useHistory();

  const Item = (url, image, name, price, i) => (
    <S.Item onClick={() => history.push(`/goods/${url}`)}>
      <S.Window><Image src={image} alt="창" borderRadius="15px" /></S.Window>
      <S.Texts>
        <S.Left>
          <MoonCharacter number={i} boxShadow={false} />
          <S.Name>{name}</S.Name>
        </S.Left>
        <p>{price}</p>
      </S.Texts>
    </S.Item>
  );

  return (
    <S.StyledDisplaySection>
      {Item('glass', Glass, '축제이즈백 소주잔', 7000, 0)}
      {Item('seal-sticker', SealSticker, '씰스티커', 1500, 1)}
      {Item('calendar', Calendar, '사계절 엽서 세트', 2000, 2)}
      {Item('sticker-pack', StickerPack, '스티커팩', 1500, 3)}
    </S.StyledDisplaySection>
  );
}
export default DisplaySection;

DisplaySection.propTypes = {

};
