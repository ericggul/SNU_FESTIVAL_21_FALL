import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';

import WhiteTheme from '@C/activity/mini/riddle/WhiteTheme';
import BlackTheme from '@C/activity/mini/riddle/BlackTheme';

import { withTheme } from 'styled-components';
import WhiteOpening from '@I/activity/riddle/white/white-opening.png';
import WhiteOpeningFont from '@I/activity/riddle/white/white-opening-font.png';
import BlackOpening from '@I/activity/riddle/black/black-opening.png';
import BlackOpeningFont from '@I/activity/riddle/black/black-opening-font.png';
import FullScreen from '@/foundations/full-screen/FullScreen';

import * as S from './styles';

function Riddle({ theme }) {
  const [riddleTheme, setRiddleTheme] = useState(null);
  const [backgroundTransit, setBakcgroundTransit] = useState(0);

  console.log(backgroundTransit);
  return (
    <S.StyledRiddle>
      <HeaderContent backgroundColor={theme.palette.PASTELLIGHT_PURPLE}>미궁게임</HeaderContent>
      <S.Body background={backgroundTransit}>
        <S.OpeningWrapper>
          <S.Opening onClick={() => setRiddleTheme('White')} onMouseEnter={() => setBakcgroundTransit(1)}>
            <S.Image src={WhiteOpening} />
            <S.Image src={WhiteOpeningFont} />
          </S.Opening>
          <S.Opening onClick={() => setRiddleTheme('Black')} onMouseEnter={() => setBakcgroundTransit(-1)}>
            <S.Image src={BlackOpening} />
            <S.Image src={BlackOpeningFont} />
          </S.Opening>
        </S.OpeningWrapper>
      </S.Body>

      <FullScreen
        isFullScreen={riddleTheme === 'White'}
        onCloseFullScreen={() => setRiddleTheme(null)}
        backgroundColor={theme.palette.RIDDLE_WHITE}
      >
        <WhiteTheme />
      </FullScreen>

      <FullScreen
        isFullScreen={riddleTheme === 'Black'}
        onCloseFullScreen={() => setRiddleTheme(null)}
        backgroundColor={theme.palette.RIDDLE_BLACK}
      >
        <BlackTheme />
      </FullScreen>
    </S.StyledRiddle>
  );
}
export default withTheme(Riddle);

Riddle.propTypes = {

};
