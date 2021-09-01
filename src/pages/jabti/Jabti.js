import React from 'react';
import JabtiContainer from '@C/jabti/Jabti';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';

function Jabti() {
  return (
    <>
      <JabtiContainer />
    </>
  );
}
export default withMountEvent(Jabti);
