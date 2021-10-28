import React, { useEffect } from 'react';
import { Prompt } from 'react-router';
import withMountEvent from '@U/hoc/withMountEvent';
import ClothingResultContainer from '@C/clothing/result/Result';
import Header from '@F/layout/Header';
import ScrollTopButton from '@F/layout/ScrollTopButton';

function ClothingResult() {
  return (
    <>
      <Header />
      <ClothingResultContainer />
    </>
  );
}

export default withMountEvent(ClothingResult);
