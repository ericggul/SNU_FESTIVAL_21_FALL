import React from 'react';
import PropTypes from 'prop-types';
import QuestionBox from '@C/activity/mini/handwriting/question/QuestionBox';
import DummyOne from '@I/activity/handwriting/question/dummy1.png';
import DummyTwo from '@I/activity/handwriting/question/dummy2.png';
import DummyThree from '@I/activity/handwriting/question/dummy3.png';
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
