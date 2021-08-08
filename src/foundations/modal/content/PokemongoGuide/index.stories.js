import React from 'react';
import GuestBookStamp from '@I/icon/stamp/guest-book-stamp.png';
import MissionGuide from './index';

export default {
  title: 'foundations/modal/content/MissionGuide',
};

export const Default = () => (
  <MissionGuide
    setIsModalOpen={() => {}}
    stamp={GuestBookStamp}
    name="방명록"
  />
);
