import React from 'react';
import PropTypes from 'prop-types';
import WaveFourSideContainer from '@/foundations/animation/WaveFourSide';
import * as S from './styles';

function WaveFourSide({ theme }) {
  return (
    <S.StyledWaveFourSide width={theme.windowWidth} height={theme.windowHeight}>
      <S.WaveSideContainer>
        <WaveFourSideContainer />
      </S.WaveSideContainer>
      <S.LowerContainer>
        SNU FESTIVAL SNU FESTIVAL SNU FESTIVAL
      </S.LowerContainer>
    </S.StyledWaveFourSide>
  );
}
export default WaveFourSide;

WaveFourSide.propTypes = {

};
