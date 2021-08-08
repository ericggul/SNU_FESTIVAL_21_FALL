import React from 'react';
import ScreenTestContainer from '@C/screen-test/ScreenTest';
import withMountEvent from '@U/hoc/withMountEvent';

function ScreenTest() {
  return (
    <ScreenTestContainer />
  );
}
export default withMountEvent(ScreenTest);
