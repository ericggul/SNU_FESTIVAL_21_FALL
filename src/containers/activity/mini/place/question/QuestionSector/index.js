import React from 'react';
import PropTypes from 'prop-types';
import QuestionBox from '@C/activity/mini/place/question/QuestionBox';
import { ConfettiRightorWrong } from '@C/activity/mini/place/question/QuestionBox/reactions.js';
import * as S from './styles';

function QuestionSector({ sectorNum, setSectorNum }) {
  const changeTF = (val) => {
    if (val === 1) {
      setSectorNum(1);
    }
  };

  return (
    <S.StyledQuestionSector>
      <ConfettiRightorWrong tf={-1} />
      <QuestionBox sectorNum={sectorNum} changeTF={changeTF} />
    </S.StyledQuestionSector>
  );
}
export default QuestionSector;

QuestionSector.propTypes = {

};
