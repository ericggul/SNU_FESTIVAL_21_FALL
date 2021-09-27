import React from 'react';
import PropTypes from 'prop-types';
import { transition } from '@C/performance/Performance';
import * as S from './styles';

function Title({ title }) {
  return (
    <S.StyledTitle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{
        ...transition,
        delay: 0.5,
      }}
    >
      {title}
    </S.StyledTitle>
  );
}
export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
