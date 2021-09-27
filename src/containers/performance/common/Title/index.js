import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Title({ title }) {
  return (
    <S.StyledTitle>
      {title}
    </S.StyledTitle>
  );
}
export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
