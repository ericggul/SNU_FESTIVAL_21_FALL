import React from 'react';
import LoadingRio from '@I/layout/loading-rio.png';
import RunningMascot from '@I/video/loading-running-mascot.gif';
import * as S from './styles';

function LoadingMascot() {
  return (
    <S.StyledLoadingMascot>
      <img src={LoadingRio} alt="" />
    </S.StyledLoadingMascot>
  );
}
export default LoadingMascot;

LoadingMascot.propTypes = {

};
