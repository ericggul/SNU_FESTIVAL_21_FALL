import React from 'react';
import DjContainer from '@C/dj/Dj';
import withMountEvent from '@U/hoc/withMountEvent';

function Dj() {
  return (
    <DjContainer />
  );
}
export default withMountEvent(Dj);
