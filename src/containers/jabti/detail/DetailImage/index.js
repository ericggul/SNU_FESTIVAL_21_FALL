import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function DetailImage({ resultImage, resultTextImage, index }) {
  return (
    <S.ImageContainer>
      <S.ResultImage over4={index >= 4} over10={index >= 10} src={resultImage} />
      <S.ResultImageText over4={index >= 4} one={index === 0} four={index === 3} src={resultTextImage} />
    </S.ImageContainer>
  );
}
export default DetailImage;

DetailImage.propTypes = {

};
