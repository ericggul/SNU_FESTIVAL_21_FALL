import React from 'react';
import PlaceContainer from '@C/activity/mini/place/Place';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';
import { theme } from '@S/index';

function Place() {
  return (
    <>
      <Header />
      <PlaceContainer />
    </>
  );
}
export default withMountEvent(Place);
