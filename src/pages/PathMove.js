import React from 'react';
import PathMoveContainer from '@C/path-move/PathMove';
import withMountEvent from '@U/hoc/withMountEvent';

function PathMove() {
  return (
    <PathMoveContainer />
  );
}
export default withMountEvent(PathMove);
