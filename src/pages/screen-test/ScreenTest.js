import React from 'react';
import ScreenTestContainer from '@C/screen-test/ScreenTest';
import withMountEvent from '@U/hoc/withMountEvent';
import { withTheme } from 'styled-components';

function ScreenTest({ theme }) {
  return (
    <ScreenTestContainer theme={theme} />
  );
}
export default withMountEvent(withTheme(ScreenTest));
