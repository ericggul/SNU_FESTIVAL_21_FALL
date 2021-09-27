import React from 'react';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';
import PerformanceConatiner from '@C/performance/Performance';

function Performance() {
  return (
    <>
      <Header />
      <PerformanceConatiner />
    </>
  );
}
// TODO: withMountEvent app에 연결
export default withMountEvent(Performance);
