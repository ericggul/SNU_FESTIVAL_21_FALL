import React, { useState } from 'react';

import KeyRingImage from '@I/goods/keyring.png';
import MemoImage from '@I/goods/memo.png';
import SanitizerImage from '@I/goods/sanitizer.png';
import SojuImage from '@I/goods/soju.png';
import StickerImage from '@I/goods/sticker.png';
import Sticker4Image from '@I/goods/sticker4.png';

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
      {Item('memo', MemoImage, '리오 떡메모지 2종', 2000, 0)}
      {Item('sanitizer', SanitizerImage, '리오 손소독제', 7000, 1)}
      {Item('soju', SojuImage, '헤롱헤롱 리오 소주잔', 6000, 2)}
      {Item('keyring', KeyRingImage, '리오 유령 키링', 4500, 3)}
      {Item('sticker', StickerImage, '관악의 밤 리오 씰스티커', 2000, 4)}
      {Item('sticker4', Sticker4Image, '관악의 밤 리오 4분할 스티커', 1500, 5)}
    </S.StyledDisplaySection>
  );
}
export default DisplaySection;

DisplaySection.propTypes = {

};
