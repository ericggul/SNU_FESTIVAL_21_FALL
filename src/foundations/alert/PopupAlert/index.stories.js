import React from 'react';
import PopupAlert from './index';

export default {
  title: 'foundations/alert/PopupAlert',
};

export const Default = () => (
  <PopupAlert
    isAlertOpen
    setIsAlertOpen={() => {}}
  >
    <div>TEST</div>
  </PopupAlert>
);
