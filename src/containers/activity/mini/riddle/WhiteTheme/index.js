import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import WhiteBackgroundMobile from '@I/activity/riddle/white/white-background.png';
import WhiteBackgroundDesktop from '@I/activity/riddle/white/white-background-desktop.png';
import QuestionBox from '@C/activity/mini/riddle/QuestionBox';

import AliceOne from '@I/activity/riddle/alice/alice-1.png';
import AliceTwo from '@I/activity/riddle/alice/alice-2.png';
import AliceThree from '@I/activity/riddle/alice/alice-3.png';
import { preloadImage } from '@U/functions/preload';
import * as S from './styles';

const answers = [
  '07436abdfc015b3d6e7f6236e4817639b24bfb77e68adfb779ace94e8d08c047',
  '4ea140588150773ce3aace786aeef7f4049ce100fa649c94fbbddb960f1da942',
  'a27db16581bce5f90e4e7d08e10f861d0c6986a01d80babea22f6af4e5774ff1',
];
const hints = [
  '힌트: 7',
  '힌트: 선',
  '힌트: 어린이',
];
const questions = [
  AliceOne,
  AliceTwo,
  AliceThree,
];

function WhiteTheme({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  useEffect(() => {
    [AliceOne, AliceTwo].forEach(preloadImage);
  }, []);

  return (
    <S.StyledWhiteTheme>
      {isMobile
        ? <S.Background src={WhiteBackgroundMobile} alt="백야 배경" />
        : <S.Background src={WhiteBackgroundDesktop} alt="백야 배경" />}

      <QuestionBox questions={questions} answers={answers} hints={hints} />
    </S.StyledWhiteTheme>
  );
}
export default withTheme(WhiteTheme);

WhiteTheme.propTypes = {

};
