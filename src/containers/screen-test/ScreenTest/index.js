import React from 'react';
import PropTypes from 'prop-types';
import LightChange2 from '@/foundations/animation/ImageTransition/LightChange2';
import Wave from '@/foundations/animation/Wave';
import Balls from '@/foundations/animation/Balls';
import * as S from './styles';

function ScreenTest() {
  return (
    <S.StyledScreenTest>
      {/* <LightChange2 /> */}
      <Wave />
      {/* <Balls /> */}
    </S.StyledScreenTest>
  );
}
export default ScreenTest;

ScreenTest.propTypes = {

};
