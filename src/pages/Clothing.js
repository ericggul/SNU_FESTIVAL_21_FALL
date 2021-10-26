import React, { useEffect } from 'react';
import { Prompt } from 'react-router';
import withMountEvent from '@U/hoc/withMountEvent';
import ClothingContainer from '@C/clothing/Clothing';
import Header from '@F/layout/Header';
import ScrollTopButton from '@F/layout/ScrollTopButton';

import { preloadImage } from '@U/functions/preload';

function GuestBook() {
  useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    alert("Don't leave me alone!");
  };

  return (
    <>
      <Header />
      <ClothingContainer />
      <ScrollTopButton />
    </>
  );
}
export default withMountEvent(GuestBook);
