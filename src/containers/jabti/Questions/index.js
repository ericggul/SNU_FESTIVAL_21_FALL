import React, { useState, useEffect, useCallback } from 'react';
import { QuestionsData, AnswersData } from '@C/jabti/Data';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
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
    setTimeout(() => handleClick(id, i), 700);
  }, []);

  useEffect(() => {
    setTransit(false);
  }, [index]);

  const splittedQuestions = (question) => (
    question.split('<br />').map((e, i) => (
      <span key={i}>
        {e}
        <br />
      </span>
    ))
  );

  return (
    <S.StyledQuestions opacity={!transit ? 1 : 0} heights={[400, 350, 250]}>
      <S.Question>
        {splittedQuestions(QuestionsData[index - 1])}
      </S.Question>
      <S.Answer>
        {AnswersData[index - 1].map((answer, i) => (
          <S.AnswerBox key={i} onClick={() => onClick(index, i)}>
            {' '}
            <TextReveal text={answer} durationTime={500} delayTime={{ min: 200, max: 200 }} />
          </S.AnswerBox>
        ))}
      </S.Answer>

      {/* {transit && <Transition />} */}
    </S.StyledQuestions>
  );
}
export default Questions;

Questions.propTypes = {

};
