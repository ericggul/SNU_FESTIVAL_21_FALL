import React from 'react';
import WaveFourSideContainer from '@C/screen-test/WaveFourSide';
import withMountEvent from '@U/hoc/withMountEvent';
import { withTheme } from 'styled-components';

function WaveFourSide({ theme }) {
  return (
    <WaveFourSideContainer theme={theme} />
  );
}
export default withMountEvent(withTheme(WaveFourSide));
