import React, { useEffect } from 'react';
import withMountEvent from '@U/hoc/withMountEvent';
import ClothingContainer from '@C/clothing/Clothing';
import Header from '@F/layout/Header';
import ScrollTopButton from '@F/layout/ScrollTopButton';

import { preloadImage } from '@U/functions/preload';

function GuestBook() {
  return (
    <>
      <Header />
      <ClothingContainer />
      <ScrollTopButton />
    </>
  );
}
export default withMountEvent(GuestBook);
