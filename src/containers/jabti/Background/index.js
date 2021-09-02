import React from 'react';
import Stars from '@F/stars/Stars';
import Stars2 from '@F/stars/Stars2';
import Moon from '@F/stars/Moon';
import CloudTop from '@I/jabti/background/cloud-top.png';
import CloudBottom from '@I/jabti/background/cloud-bottom.png';
import PropTypes from 'prop-types';
import * as S from './styles';

function Background() {
  return (
    <S.StyledBackground>
      <Stars />
      <Stars2 width="100%" height="100%" color="rgb(255, 240, 150)" number="100" />
      {/* <S.ImageTop src={CloudTop} /> */}
    </S.StyledBackground>
  );
}
export default Background;

Background.propTypes = {

};
