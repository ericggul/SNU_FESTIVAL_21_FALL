import React from 'react';
import HandwritingContainer from '@C/activity/mini/handwriting/Handwriting';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';
import { theme } from '@S/index';

function Handwriting() {
  return (
    <>
      <Header />
      <HandwritingContainer />
    </>
  );
}
export default withMountEvent(Handwriting);
