import React, { useEffect } from 'react';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';

import LightMissionCompleteContainer from '@C/home/LightMissionComplete';

function LightMissionComplete() {
  return (
    <>
      <Header />
      <LightMissionCompleteContainer />
    </>
  );
}

export default withMountEvent(LightMissionComplete);
