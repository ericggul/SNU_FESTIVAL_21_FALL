import React, { useState } from 'react';
import Glass from '@I/goods/glass.jpg';
import SealSticker from '@I/goods/seal-sticker.png';
import Calendar from '@I/goods/calendar.png';
import StickerPack from '@I/goods/sticker-pack.png';
import GoodsBox from '@C/goods/GoodsBox';
import { useHistory } from 'react-router';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import * as S from './styles';

export const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };

function DisplaySection() {
  const history = useHistory();
  const [selected, setSelected] = useState(null);

  const handleClick = (url, i) => {
    history.push(`/goods/${url}`);
    setSelected(i);
  };

  const Item = (url, image, name, price, i) => (
    <S.Item
      onClick={() => handleClick(url, i)}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{
        opacity: selected === i ? 1 : 0,
      }}
      transition={{
        ...transition,
        delay: (i + 1) * 0.3,
      }}
    >
      <GoodsBox image={image} name={name} price={price} i={i} />
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
