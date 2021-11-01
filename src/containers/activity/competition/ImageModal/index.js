import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function ImageModal({ src }) {
  console.log(src);
  return (
    <S.ImageModal src={src} />
  );
}
export default ImageModal;

ImageModal.propTypes = {

};
