import React from 'react';
import PropTypes from 'prop-types';
import { transition } from '@C/performance/Performance';
import * as S from './styles';

function Title({ title, handleClick }) {
  return (
    <S.StyledTitle onClick={handleClick}>
      <S.Text>
        {title}
      </S.Text>

    </S.StyledTitle>
  );
}
export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
