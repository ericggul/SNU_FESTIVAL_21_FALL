import React from 'react';
import PropTypes from 'prop-types';
import ColorChange from '@/foundations/animation/ImageTransition/ColorShine';
import LightChange1 from '@/foundations/animation/ImageTransition/LightChange1';
import LightChange2 from '@/foundations/animation/ImageTransition/LightChange2';
import Wave from '@/foundations/animation/Wave';
import WaveFourSide from '@/foundations/animation/WaveFourSide';
import Balls from '@/foundations/animation/Balls';
import Firework from '@/foundations/animation/Firework';
import SparklySkull from '@/foundations/animation/SparklySkull';
import Particle from '@/foundations/animation/Particle';

import TextShine from '@/foundations/animation/text-animation/TextShine';
import Lumination1 from '@/foundations/animation/Lumination/Lumination1';
import Lumination2 from '@/foundations/animation/Lumination/Lumination2';
import Lumination3 from '@/foundations/animation/Lumination/Lumination3';
import * as S from './styles';

function ScreenTest({ theme }) {
  return (
    <S.StyledScreenTest>
      {/* <LightChange1 /> */}
      {/* <Wave /> */}
      {/* <Balls /> */}
      <Firework />
      {/* <SparklySkull /> */}
      {/* <WaterThreejs /> */}
      {/* <Particle /> */}

      {/* <TextShine /> */}
      {/* <Lumination3 /> */}

    </S.StyledScreenTest>
  );
}
export default ScreenTest;

ScreenTest.propTypes = {

};
