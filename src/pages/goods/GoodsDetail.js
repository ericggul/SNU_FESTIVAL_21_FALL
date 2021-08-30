import React from 'react';
import withMountEvent from '@U/hoc/withMountEvent';
import PropTypes from 'prop-types';
import GlassImage from '@I/goods/glass.jpg';
import GlassDetail from '@I/goods/glass-detail.png';
import SealStickerImage from '@I/goods/seal-sticker.png';
import SealStickerDetail from '@I/goods/seal-sticker-detail.png';
import CalendarImage from '@I/goods/calendar.png';
import CalendarDetail from '@I/goods/calendar-detail.png';
import StickerPackImage from '@I/goods/sticker-pack.png';
import StickerPackDetail from '@I/goods/sticker-pack-detail.png';
import GoodsDetailContainer from '@C/goods/GoodsDetail';
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

export const Glass = withMountEvent(() => (
  <GoodsDetail
    information={{ name: '축제이즈백 소주잔', price: 7000, index: 0 }}
    image={GlassImage}
    longImage={GlassDetail}
  />
));

export const SealSticker = withMountEvent(() => (
  <GoodsDetail
    information={{ name: '씰스티커', price: 1500, index: 1 }}
    image={SealStickerImage}
    longImage={SealStickerDetail}
  />
));

export const Calendar = withMountEvent(() => (
  <GoodsDetail
    information={{ name: '사계절 엽서 세트', price: 2000, index: 2 }}
    image={CalendarImage}
    longImage={CalendarDetail}
  />
));

export const StickerPack = withMountEvent(() => (
  <GoodsDetail
    information={{ name: '스티커팩', price: 1500, index: 3 }}
    image={StickerPackImage}
    longImage={StickerPackDetail}
  />
));
