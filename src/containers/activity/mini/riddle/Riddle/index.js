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
        <S.Expl>
          <S.EmphText>관악의 밤에서 펼쳐지는 치열한 두뇌 싸움!</S.EmphText>
          <br />
          백야는 가볍게 머리를 풀 수 있는 정도의 난이도!
          <br />
          흑야에서는 불같은 난이도!
          {/* 때문에 고민하다가 마음이 시커멓게 탈 수 있어요…. */}
          <br />
          미궁게임 풀며 깊어지는 생각과 함께 깊어지는 밤을 보내보세요!
          <br />
          <S.EmphText>이벤트</S.EmphText>
          : 백야 혹은 흑야 세트에서
          {' '}
          <S.EmphText>3문제</S.EmphText>
          {' '}
          이상 맞춰보세요!(택 1)
        </S.Expl>
        <S.OpeningWrapper>
          <S.Opening onClick={() => handleClick('White')}>
            <LightChange1 image={WhiteOpening} index={0} backgroundColor="white" />
            <S.Image src={WhiteOpeningFont} />
          </S.Opening>
          <S.Opening onClick={() => handleClick('Black')}>
            <LightChange1 image={BlackOpening} index={1} backgroundColor="black" />
            <S.Image src={BlackOpeningFont} />
          </S.Opening>
        </S.OpeningWrapper>
      </S.Body>

      <FullScreen
        isFullScreen={riddleTheme === 'White'}
        onCloseFullScreen={() => handleClick(null)}
        backgroundColor={theme.palette.RIDDLE_WHITE}
      >
        <WhiteTheme changeTheme={() => handleClick(null)} />
      </FullScreen>

      <FullScreen
        isFullScreen={riddleTheme === 'Black'}
        onCloseFullScreen={() => handleClick(null)}
        backgroundColor={theme.palette.RIDDLE_BLACK}
      >
        <BlackTheme changeTheme={() => handleClick(null)} />
      </FullScreen>
    </S.StyledRiddle>
  );
}
export default withTheme(Riddle);

Riddle.propTypes = {

};
