import React from 'react';
import withMountEvent from '@U/hoc/withMountEvent';
import PropTypes from 'prop-types';

import GoodsDetailContainer from '@C/goods/GoodsDetail';

import KeyRingImage from '@I/goods/keyring.png';
import KeyRingDetail from '@I/goods/keyring-detail.png';
import MemoImage from '@I/goods/memo.png';
import MemoDetail from '@I/goods/memo-detail.png';
import SanitizerImage from '@I/goods/sanitizer.png';
import SanitizerDetail from '@I/goods/sanitizer-detail.png';
import SojuImage from '@I/goods/soju.png';
import SojuDetail from '@I/goods/soju-detail.png';
import StickerImage from '@I/goods/sticker.png';
import StickerDetail from '@I/goods/sticker-detail.png';
import Sticker4Image from '@I/goods/sticker4.png';
import Sticker4Detail from '@I/goods/sticker4-detail.png';

import Header from '@F/layout/Header';

function GoodsDetail({
  information, image, longImage,
}) {
  return (
    <>
      <Header />
      <GoodsDetailContainer
        information={information}
        image={image}
        longImage={longImage}
      />
    </>
  );
}
export default GoodsDetail;

GoodsDetail.propTypes = {
  information: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  image: PropTypes.string.isRequired,
  longImage: PropTypes.string.isRequired,
};

export const Keyring = withMountEvent(() => (
  <GoodsDetail
    information={{ name: '리오 유령 키링', price: 4500, index: 0 }}
    image={KeyRingImage}
    longImage={KeyRingDetail}
  />
));

export const Memo = withMountEvent(() => (
  <GoodsDetail
    information={{ name: '리오 떡메모지 2종', price: 2000, index: 1 }}
    image={MemoImage}
    longImage={MemoDetail}
  />
));

export const Sanitizer = withMountEvent(() => (
  <GoodsDetail
    information={{ name: '리오 손소독제', price: 7000, index: 2 }}
    image={SanitizerImage}
    longImage={SanitizerDetail}
  />
));

export const Soju = withMountEvent(() => (
  <GoodsDetail
    information={{ name: '헤롱헤롱 리오 소주잔', price: 6000, index: 3 }}
    image={SojuImage}
    longImage={SojuDetail}
  />
));

export const Sticker = withMountEvent(() => (
  <GoodsDetail
    information={{ name: '관악의 밤 리오 씰스티커', price: 1500, index: 4 }}
    image={StickerImage}
    longImage={StickerDetail}
  />
));

export const Sticker4 = withMountEvent(() => (
  <GoodsDetail
    information={{ name: '관악의 밤 리오 4분할 스티커', price: 1500, index: 5 }}
    image={Sticker4Image}
    longImage={Sticker4Detail}
  />
));
