import React, { useEffect } from 'react';
import { Prompt } from 'react-router';
import withMountEvent from '@U/hoc/withMountEvent';
import ClothingContainer from '@C/clothing/Clothing';
import Header from '@F/layout/Header';
import ScrollTopButton from '@F/layout/ScrollTopButton';

function Clothing() {
  return (
    <>
      <Header />
      <ClothingContainer />
      <ScrollTopButton />
    </>
  );
}

export default withMountEvent(Clothing);
