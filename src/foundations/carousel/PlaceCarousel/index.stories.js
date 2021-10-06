import React from 'react';
import Carousel from './index';

export default {
  title: 'foundations/carousel/Carousel',
};

export const Default = () => (
  <Carousel
    fullWidth={1000}
    fullHeight={650}
    items={[
      <div>Hello</div>,
      <div>Hello</div>,
      <div>Hello</div>,
      <div>Hello</div>,
      <div>Hello</div>,
      <div>Hello</div>,
      <div>Hello</div>,
      <div>Hello</div>,
      <div>Hello</div>,
      <div>Hello</div>,
      <div>Hello</div>,
    ]}
  />
);
