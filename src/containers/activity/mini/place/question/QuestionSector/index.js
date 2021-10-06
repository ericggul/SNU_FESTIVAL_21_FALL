import React from 'react';
import PropTypes from 'prop-types';
import QuestionBox from '@C/activity/mini/handwriting/question/QuestionBox';
import * as S from './styles';

function QuestionSector({ sectorNum }) {
  return (
    <S.StyledQuestionSector>
      <QuestionBox sectorNum={sectorNum} />
    </S.StyledQuestionSector>
  );
}
export default QuestionSector;

QuestionSector.propTypes = {

};
