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
import LightChange1 from '@/foundations/animation/ImageTransition/LightChange1';
import FullScreen from '@/foundations/full-screen/FullScreen';

import * as S from './styles';

function Riddle({ theme }) {
  const [riddleTheme, setRiddleTheme] = useState(null);
  const [backgroundTransit, setBakcgroundTransit] = useState(null);

  const handleClick = (type) => {
    setBakcgroundTransit(type);
    if (!type) {
      setRiddleTheme(type);
    }
    setTimeout(() => {
      setRiddleTheme(type);
    }, 0);
  };

  return (
    <S.StyledRiddle>
      <HeaderContent backgroundColor="transparent">미궁게임</HeaderContent>
      <S.Body background={backgroundTransit}>
        <S.Background background={backgroundTransit} />
        <S.OpeningWrapper>
          <S.Opening onClick={() => handleClick('White')}>
            <LightChange1 image={WhiteOpening} index={0} reRender={!riddleTheme} backgroundColor="white" />
            <S.Image src={WhiteOpeningFont} />
          </S.Opening>
          <S.Opening onClick={() => handleClick('Black')}>
            <LightChange1 image={BlackOpening} index={1} reRender={!riddleTheme} backgroundColor="black" />
            <S.Image src={BlackOpeningFont} />
          </S.Opening>
        </S.OpeningWrapper>
      </S.Body>

      <FullScreen
        isFullScreen={riddleTheme === 'White'}
        onCloseFullScreen={() => handleClick(null)}
        backgroundColor={theme.palette.RIDDLE_WHITE}
      >
        <WhiteTheme />
      </FullScreen>

      <FullScreen
        isFullScreen={riddleTheme === 'Black'}
        onCloseFullScreen={() => handleClick(null)}
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
