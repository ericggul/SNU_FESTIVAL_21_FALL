import React, { useEffect, useMemo } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import HauntedHouseBackground from '@I/activity/riddle/hounted-house/haunted-house-background.jpg';
import Castle from '@I/activity/riddle/hounted-house/castle.png';
import Moon from '@I/activity/riddle/hounted-house/moon.png';
import Cloud from '@I/activity/riddle/hounted-house/cloud.png';
import BatWhite from '@I/activity/riddle/hounted-house/bat-light.png';
import BatDark from '@I/activity/riddle/hounted-house/bat-dark.png';
import GhostOne from '@I/activity/riddle/hounted-house/ghost-1.png';
import GhostTwo from '@I/activity/riddle/hounted-house/ghost-2.png';
import GhostThree from '@I/activity/riddle/hounted-house/ghost-3.png';

import QuestionBox from '@C/activity/mini/riddle/QuestionBox';
import HauntedHouseOne from '@I/activity/riddle/hounted-house/haunted-house-1.png';
import HauntedHouseTwo from '@I/activity/riddle/hounted-house/haunted-house-2.png';
import HauntedHouseThree from '@I/activity/riddle/hounted-house/haunted-house-3.png';
import { preloadImage } from '@U/functions/preload';
import * as S from './styles';

const answers = [
  'a18b869b2e81c0c529552a3c4fa5c92ed08b98a4e146aed778d71d27517f83ac',
  '83fa74e70278e5b9ff3fa7995a40d04db8a0868b7b70695bc3dd7e4f96251451',
  'c195d2d8756234367242ba7616c5c60369bc25ced2dcb5b92808d31b58ef217a',
];
const hints = [
  '힌트: 25',
  '힌트: 시간',
  '힌트: 6',
];
const questions = [
  HauntedHouseOne,
  HauntedHouseTwo,
  HauntedHouseThree,
];

const getRandom = (a, b) => Math.random() * (b - a) + a;

function HauntedHouseTheme({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  useEffect(() => {
    [HauntedHouseOne, HauntedHouseTwo].forEach(preloadImage);
  }, []);

  return (
    <S.StyledHauntedHouseTheme>
      <S.Background src={HauntedHouseBackground} alt="유령의 집 배경" />
      <S.Moon src={Moon} alt="달" />
      <S.Cloud src={Cloud} alt="구름" />
      <S.Castle src={Castle} alt="성" />

      <S.Ghost src={GhostOne} alt="유령1" width={isMobile ? 80 : 100} bottom={12} left={isMobile ? 17 : 40} index={1} duration={5} />
      <S.Ghost src={GhostThree} alt="유령2" width={isMobile ? 80 : 100} bottom={3} left={isMobile ? 8 : 35} index={2} duration={6} />
      <S.Ghost src={GhostTwo} alt="유령3" width={isMobile ? 80 : 100} bottom={8} right={isMobile ? 17 : 40} index={3} duration={4.5} />

      <S.Bat src={BatWhite} alt="박쥐" width={isMobile ? 100 : 200} top={isMobile ? 5 : 10} left={10} duration={1} />
      <S.Bat src={BatWhite} alt="박쥐" width={100} top={30} right={18} duration={getRandom(0.7, 1.3)} />
      <S.Bat src={BatWhite} alt="박쥐" width={50} top={25} left={30} duration={0.9} />
      <S.Bat src={BatDark} alt="박쥐" width={200} top={35} left={13} duration={1.2} />
      <S.Bat src={BatDark} alt="박쥐" width={getRandom(10, 300)} top={getRandom(30, 100)} left={getRandom(10, 100)} duration={getRandom(0.3, 3)} />
      <S.Bat src={BatDark} alt="박쥐" width={getRandom(10, 300)} top={getRandom(30, 100)} left={getRandom(10, 100)} duration={getRandom(0.3, 3)} />
      <S.Bat src={BatWhite} alt="박쥐" width={getRandom(10, 20)} top={getRandom(30, 100)} left={getRandom(10, 100)} duration={getRandom(0.3, 3)} />
      <S.Bat src={BatWhite} alt="박쥐" width={getRandom(10, 20)} top={getRandom(30, 100)} left={getRandom(10, 100)} duration={getRandom(0.3, 3)} />
      <S.Bat src={BatDark} alt="박쥐" width={getRandom(10, 20)} top={getRandom(30, 100)} left={getRandom(10, 100)} duration={getRandom(0.3, 3)} />
      <S.Bat src={BatWhite} alt="박쥐" width={getRandom(10, 20)} top={getRandom(30, 100)} left={getRandom(10, 100)} duration={getRandom(0.3, 3)} />
      <S.Bat src={BatWhite} alt="박쥐" width={getRandom(10, 20)} top={getRandom(30, 100)} left={getRandom(10, 100)} duration={getRandom(0.3, 3)} />
      <S.Bat src={BatDark} alt="박쥐" width={getRandom(10, 20)} top={getRandom(30, 100)} left={getRandom(10, 100)} duration={getRandom(0.3, 3)} />
      <S.Bat src={BatWhite} alt="박쥐" width={getRandom(10, 20)} top={getRandom(30, 100)} left={getRandom(10, 100)} duration={getRandom(0.3, 3)} />
      <S.Bat src={BatWhite} alt="박쥐" width={getRandom(10, 20)} top={getRandom(30, 100)} left={getRandom(10, 100)} duration={getRandom(0.3, 3)} />
      <S.Bat src={BatDark} alt="박쥐" width={getRandom(10, 20)} top={getRandom(30, 100)} left={getRandom(10, 100)} duration={getRandom(0.3, 3)} />
      <S.Bat src={BatDark} alt="박쥐" width={isMobile ? 80 : 120} top={isMobile ? 3 : 8} right={10} duration={1.1} />

      <QuestionBox answerColor="white" questions={questions} answers={answers} hints={hints} />
    </S.StyledHauntedHouseTheme>
  );
}
export default withTheme(HauntedHouseTheme);

HauntedHouseTheme.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
