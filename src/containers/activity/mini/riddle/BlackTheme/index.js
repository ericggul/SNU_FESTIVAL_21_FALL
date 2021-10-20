import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import BlackBackgroundMobile from '@I/activity/riddle/black/black-background.png';
import BlackBackgroundDesktop from '@I/activity/riddle/black/black-background-desktop.png';
import QuestionBox from '@C/activity/mini/riddle/QuestionBox';

import BlackOne from '@I/activity/riddle/black/black-1.png';
import BlackTwo from '@I/activity/riddle/black/black-2.png';
import BlackThree from '@I/activity/riddle/black/black-3.png';
import BlackFour from '@I/activity/riddle/black/black-4.png';
import BlackFive from '@I/activity/riddle/black/black-5.png';
import BlackOpeningFont from '@I/activity/riddle/black/black-opening-font.png';

import { preloadImage } from '@U/functions/preload';
import * as S from './styles';

const answers = [
  '0239f9c3d2acb67d302578a18d7569145d9c5fef3f6f1f4d25019ab4dc675cde',
  '0cdd5a98ed638b18bebd87df0139384e45d1fec19885c3be9d6a9d2ffe0793c2',
  '3b17325ba5e09af1837fbed7d055e342d8eb6edb318d869b3dfbcd64336812a5',
  '2cf9a3a42d85192888c54c42fb3f9c7bb5eba2e8bf62b1c314f926b4682a578e',
  '6f36e2f8e26faceb02f501ffa0661e003a32ec7d19470000d4425ce2822047d3',
];
const hints = [
  '다른 언어로',
  '♪',
  '<흑야> 1번',
  '수학',
  '인스타그램',
];
const questions = [
  BlackOne,
  BlackTwo,
  BlackThree,
  BlackFour,
  BlackFive,
];

function BlackTheme({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  useEffect(() => {
    [BlackOne, BlackTwo].forEach(preloadImage);
  }, []);

  return (
    <S.StyledBlackTheme>
      {isMobile
        ? <S.Background src={BlackBackgroundMobile} alt="백야 배경" />
        : <S.Background src={BlackBackgroundDesktop} alt="백야 배경" />}

      <QuestionBox textImg={BlackOpeningFont} questions={questions} answers={answers} hints={hints} />
    </S.StyledBlackTheme>
  );
}
export default withTheme(BlackTheme);

BlackTheme.propTypes = {

};
