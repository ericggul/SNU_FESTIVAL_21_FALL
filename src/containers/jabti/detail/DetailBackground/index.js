import React from 'react';
import Stars2 from '@F/stars/Stars2';
import CloudTop from '@I/jabti/background/cloud-top.png';
import CloudBottom from '@I/jabti/background/cloud-bottom.png';
import PropTypes from 'prop-types';
import * as S from './styles';

function DetailBackground({ currentStars, colorCode }) {
  return (
    <S.Background>
      {
          currentStars > 0 && <Stars2 width="100%" height="100%" color={colorCode} delay={50} number={400} />
        }
      <S.ImageTop src={CloudTop} />
      <S.ImageBottom src={CloudBottom} />
    </S.Background>
  );
}
export default DetailBackground;

DetailBackground.propTypes = {
  currentStars: PropTypes.number.isRequired,
  colorCode: PropTypes.string.isRequired,
};
