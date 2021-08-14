import React, { useState, useCallback, useEffect } from 'react';
import { QuestionsData, AnswersData } from '@C/jabti/Data';
import { useDispatch, useSelector } from 'react-redux';
import Questions from '@C/jabti/Questions';
import Background from '@C/jabti/Background';
import { useHistory } from 'react-router';
import { getRandomElementFromArray } from '@U/functions/array';
import Stars from '@F/stars/Stars';
import Moon from '@F/stars/Moon';
import { Wrong } from '@F/Tone';
import { jabtiCollectionRef } from '@U/initializer/firebase';
import PropTypes from 'prop-types';
import * as S from './styles';

function Jabti() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [resultReady, setResultReady] = useState(false);
  const [answerArray, setAnswerArray] = useState([]);

  const history = useHistory();
  const goToResult = () => {
    console.log(answerArray);
    history.push(
      {
        pathname: `/jabti/${getRandomElementFromArray([
          'achieve', 'calm', 'delight', 'harmony', 'improvement', 'passion',
          'pleasure', 'precious', 'refresh', 'romance', 'stress-free', 'sympathy',
        ])}`,
        state: { fromQuestions: true },
      },
    );
  };

  useEffect(() => {
    if (resultReady) {
      goToResult();
    }
  }, [resultReady]);

  const handleClick = (questionIndex, answerIndex) => {
    setAnswerArray(answerArray => [...answerArray, answerIndex]);
    if (questionIndex === QuestionsData.length - 1) {
      setResultReady(true);
    } else {
      setDisplayIndex(displayIndex => displayIndex + 1);
    }
  };
  return (
    <>
      <Background />
      <Stars />
      <Moon />
      <S.StyledJabti>
        <Questions index={displayIndex} handleClick={handleClick} />
      </S.StyledJabti>
    </>
  );
}
export default Jabti;

Jabti.propTypes = {

};
