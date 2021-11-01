import React from 'react';
import WaveFourSide from '@F/animation/WaveFourSide';
import Particle from '@F/animation/Particle';
import PropTypes from 'prop-types';
import * as S from './styles';

function Background({ image }) {
  return (
    <>
      <WaveFourSide />
      <Particle />
      <S.Background src={image} alt="" />
    </>
  );
}
export default Background;

Background.propTypes = {
};

Background.defaultProps = {

};
