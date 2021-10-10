import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Background({ image }) {
  return (
    <S.Background src={image} alt="" />
  );
}
export default Background;

Background.propTypes = {
};

Background.defaultProps = {

};
