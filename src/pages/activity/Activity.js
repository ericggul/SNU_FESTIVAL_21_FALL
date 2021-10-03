import React from 'react';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';
import ActivityContainer from '@C/activity/Activity';

function Activity() {
  return (
    <>
      <Header />
      <ActivityContainer />
    </>
  );
}
export default withMountEvent(Activity);
