import React from 'react';
import OmokContainer from '@C/activity/mini/omok/Omok';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';
import { theme } from '@S/index';

function Omok() {
  return (
    <>
      <Header />
      <OmokContainer />
    </>
  );
}
export default withMountEvent(Omok);
