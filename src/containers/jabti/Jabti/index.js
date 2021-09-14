import React, { useState, useCallback, useEffect } from 'react';
import { QuestionsData, AnswersData } from '@C/jabti/Data';
import { useDispatch, useSelector } from 'react-redux';
import Intro from '@C/jabti/Intro';
import Questions from '@C/jabti/Questions';
import Background from '@C/jabti/Background';
import { useHistory } from 'react-router';
import { getRandomElementFromArray } from '@U/functions/array';
import { jabtiCollectionRef } from '@U/initializer/firebase';
import PropTypes from 'prop-types';
import * as S from './styles';

function Jabti() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [resultReady, setResultReady] = useState(false);
  const [answerArray, setAnswerArray] = useState([]);

  const history = useHistory();
  const goToResult = () => {

    const answertoResult = (answer) => {
      let result = "";
      result += (answer[0] === 0 ? 's' : 'p');
      result += (answer[1] === 0 ? 'y' : 'w');
      result += (answer[2] === 0 ? 'b' : 'g');
      result += (answer[3] === 0 ? 'g' : 't');

      return result;
    }
    history.push(
      {
        pathname: `/jabti/${answertoResult(answerArray)}`,
        state: { fromQuestions: true },
      },
    );
  };

  useEffect(() => {
    if (resultReady) {
      setTimeout(()=>{
        goToResult();
      }, 2000)
    }
  }, [resultReady]);

  const handleClick = (questionIndex, answerIndex) => {
    if(questionIndex > 0){
      setAnswerArray(answerArray => [...answerArray, answerIndex]);
    }
    if (questionIndex === QuestionsData.length) {
      setResultReady(true);
    } else {
      setDisplayIndex(displayIndex => displayIndex + 1);
    }
  };

  return (
    <>
      <Background index={displayIndex} resultReady={resultReady} />
      <S.StyledJabti>
        {displayIndex === 0 ? 
        <Intro handleClick={handleClick}/> : 
        <Questions index={displayIndex} handleClick={handleClick} />}
      </S.StyledJabti>
    </>
  );
}
export default Jabti;

Jabti.propTypes = {

};
