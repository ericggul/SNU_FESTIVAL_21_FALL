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

  const history = useHistory();
  const goToResult = useCallback(() => {
    history.push(
      {
        pathname: `/jabti/${getRandomElementFromArray([
          'achieve', 'calm', 'delight', 'harmony', 'improvement', 'passion',
          'pleasure', 'precious', 'refresh', 'romance', 'stress-free', 'sympathy',
        ])}`,
        state: { fromQuestions: true },
      },
    );
  }, []);

  useEffect(() => {
    // jabtiCollectionRef.doc('result-array').get()
    //   .then((doc) => {
    //     console.log(doc.data().viewCount);
    //   })
    //   .catch(() => (
    //     console.log('인터넷이 불안정합니다. 다시 시도해주세요.')));
  }, []);

  const handleClick = (questionIndex, answerIndex) => {
    if (questionIndex === QuestionsData.length - 1) {
      goToResult();
    } else {
      setDisplayIndex(displayIndex => displayIndex + 1);
      Wrong();
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
