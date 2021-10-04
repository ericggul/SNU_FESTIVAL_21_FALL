import React from 'react';
import PropTypes from 'prop-types';
import QuestionBox from '@C/activity/mini/handwriting/question/QuestionBox';
import DummyOne from '@I/activity/handwriting/question/dummy1.png';
import DummyTwo from '@I/activity/handwriting/question/dummy2.png';
import DummyThree from '@I/activity/handwriting/question/dummy3.png';
import * as S from './styles';

function QuestionSector() {
  const answers = [
    '07436abdfc015b3d6e7f6236e4817639b24bfb77e68adfb779ace94e8d08c047',
    '4ea140588150773ce3aace786aeef7f4049ce100fa649c94fbbddb960f1da942',
    'a27db16581bce5f90e4e7d08e10f861d0c6986a01d80babea22f6af4e5774ff1',
  ];
  const hints = [
    '힌트: 7',
    '힌트: 선',
    '힌트: 어린이',
  ];
  const questions = [
    DummyOne,
    DummyTwo,
    DummyThree,
  ];

  return (
    <S.StyledQuestionSector>
      <QuestionBox questions={questions} answers={answers} hints={hints} />
    </S.StyledQuestionSector>
  );
}
export default QuestionSector;

QuestionSector.propTypes = {

};
