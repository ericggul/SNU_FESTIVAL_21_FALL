import React from 'react';
import IU5 from '@I/jpeg/IU5.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU1 from '@I/jpeg/IU1.jpeg';
import CustomPaging from './index';

export default {
  title: 'foundations/react-slick/CustomPaging',
};

const images = [IU5, IU4, IU1];

export const Default = () => (
  <CustomPaging
    items={images}
  />
);
