import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function TextShine({ text }) {
  return (
    <S.StyledTextShine>
      <S.Text>
        {text}
      </S.Text>
    </S.StyledTextShine>
  );
}
export default TextShine;

TextShine.propTypes = {

};
