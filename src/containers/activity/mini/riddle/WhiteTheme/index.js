import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import WhiteBackgroundMobile from '@I/activity/riddle/white/white-background.png';
import WhiteBackgroundDesktop from '@I/activity/riddle/white/white-background-desktop.png';
import QuestionBox from '@C/activity/mini/riddle/QuestionBox';

import WhiteOne from '@I/activity/riddle/white/white-1.png';
import WhiteTwo from '@I/activity/riddle/white/white-2.png';
import WhiteThree from '@I/activity/riddle/white/white-3.png';
import WhiteFour from '@I/activity/riddle/white/white-4.png';
import WhiteFive from '@I/activity/riddle/white/white-5.png';
import WhiteOpeningFont from '@I/activity/riddle/white/white-opening-font.png';

import { preloadImage } from '@U/functions/preload';
import * as S from './styles';

const answers = [
  'b16bec1ce2b9561977e6a0005435cd4983a7994c9d96fbd7ecf8b4592ff4f1c8',
  '720bce5ed1c8c73c1bee22b6f2178fb205920e4d37944ac7e2b815dab3a0d151',
  '3de26124efdefae54af8af041e90adc091e6a6ae90eaed512eebc4c8d5f90b9d',
  '0bdb1a1b7587449fcd50a6a6d0b1b89abdfc5ca17ba11c5d7b6948441a35f66b',
  '8b49bda2606fd82b02065c7a4a6215fd76159579f0a46afb19af9c29139ebf1b',
];
const hints = [
  '뭐게',
  '뭐게',
  '뭐게',
  '뭐게',
  '뭐게',
];
const questions = [
  WhiteOne,
  WhiteTwo,
  WhiteThree,
  WhiteFour,
  WhiteFive,
];

function WhiteTheme({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  useEffect(() => {
    [WhiteOne, WhiteTwo, WhiteThree].forEach(preloadImage);
  }, []);

  return (
    <S.StyledWhiteTheme>
      {isMobile
        ? <S.Background src={WhiteBackgroundMobile} alt="백야 배경" />
        : <S.Background src={WhiteBackgroundDesktop} alt="백야 배경" />}
      <QuestionBox textImg={WhiteOpeningFont} questions={questions} answers={answers} hints={hints} />
    </S.StyledWhiteTheme>
  );
}
export default withTheme(WhiteTheme);

WhiteTheme.propTypes = {

};
