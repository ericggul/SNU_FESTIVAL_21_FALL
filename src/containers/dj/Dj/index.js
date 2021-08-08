import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RandomTextShuffle from '@F/animation/text-animation/RandomTextShuffle';
import TypingTextTransition from '@F/animation/text-animation/TypingTextTransitionv2';
import Balls from '@F/animation/Balls';
import Stars from '@F/stars/Stars';
import Moon from '@F/stars/Moon';
import Tone from '@F/Tone';
import * as S from './styles';

function Dj() {
  return (
    <S.StyledDj>
      <Tone />
      <TypingTextTransition text="Cleopatra" intervalTime={50} delayTime={100} />
      <Stars />
      <Moon />
    </S.StyledDj>
  );
}
export default Dj;

Dj.propTypes = {

};
