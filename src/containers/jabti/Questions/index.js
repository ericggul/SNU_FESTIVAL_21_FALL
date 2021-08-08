import React, { useState, useEffect, useCallback } from 'react';
import { QuestionsData, AnswersData } from '@C/jabti/Data';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { getRandomElementFromArray } from '@U/functions/array';
import RandomTextShuffle from '@F/animation/text-animation/RandomTextShuffle';
import Transition from '@C/jabti/Transition';
import TextReveal from '@F/animation/text-animation/TextReveal';
import * as S from './styles';

function Questions({
  index, handleClick,
}) {
  const [transit, setTransit] = useState(false);

  const onClick = useCallback((id, i) => {
    setTransit(true);
    setTimeout(() => handleClick(id, i), 1000);
  }, []);

  useEffect(() => {
    setTransit(false);
  }, [index]);

  return (
    <S.StyledQuestions opacity={!transit ? 1 : 0}>
      {QuestionsData[index]}
      {AnswersData[index].map((answer, i) => (
        <S.AnswerBox key={i} onClick={() => onClick(index, i)}>
          {' '}
          <TextReveal text={answer} />
        </S.AnswerBox>
      ))}
      {transit && <Transition />}
    </S.StyledQuestions>
  );
}
export default Questions;

Questions.propTypes = {

};
