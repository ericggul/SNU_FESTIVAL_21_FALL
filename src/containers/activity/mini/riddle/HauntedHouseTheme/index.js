import React, { useMemo } from 'react';
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
import * as S from './styles';

function HauntedHouseTheme({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

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
      <S.Bat src={BatWhite} alt="박쥐" width={100} top={30} right={18} duration={1.1} />
      <S.Bat src={BatWhite} alt="박쥐" width={50} top={25} left={30} duration={0.9} />
      <S.Bat src={BatDark} alt="박쥐" width={200} top={35} left={13} duration={1.2} />
      <S.Bat src={BatDark} alt="박쥐" width={isMobile ? 80 : 120} top={isMobile ? 3 : 8} right={10} duration={1.1} />

      <QuestionBox answerColor="white" />
    </S.StyledHauntedHouseTheme>
  );
}
export default withTheme(HauntedHouseTheme);

HauntedHouseTheme.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
