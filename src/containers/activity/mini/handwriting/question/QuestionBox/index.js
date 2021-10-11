import React, {
  useEffect, useCallback, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import useInput from '@U/hooks/useInput';
import Slider from 'react-slick';
import { sha256 } from 'js-sha256';
import { toast } from 'react-toastify';
import useModal from '@U/hooks/useModal';
import MiniGameGuide from '@F/modal/content/MiniGameGuide';
import { shuffleArray } from '@U/functions/array';
import { MapInteractionCSS } from 'react-map-interaction';
import { CONVERTED_MAJORS } from '@C/activity/mini/handwriting/data.js';

import { withTheme } from 'styled-components';

import Indicator from '@C/activity/mini/handwriting/question/Indicator';

import { useUser } from '@U/hooks/useAuth';
import useMiniGame from '@U/hooks/useMiniGame';
import withUser from '@U/hoc/withUser';
import SignInGuide from '@F/modal/content/SignInGuide';
import { useSelector, useDispatch } from 'react-redux';
import DiscreteCarousel from '@/foundations/carousel/HandwritingCarousel';
import { speakRightorWrong, confettiRightorWrong } from './reactions.js';
import { actions } from '@/redux/mini-game/state';
import * as S from './styles';

export function QuestionBox({
  sectorNum, user, isAuthorized, theme,
}) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme]);
  const { value, onChange, setValue } = useInput('');

  const solvedArrayConverter = useCallback((inputString, totalLength) => {
    console.log('array converter');
    let array = [];
    let solvedIndexesStorage = [];
    let unSolvedIndexesStorage = [];
    for (let idx = 0; idx < totalLength; idx += 1) {
      if (idx < inputString.length) {
        array[idx] = parseInt(inputString[inputString.length - 1 - idx], 10);
        if (array[idx] == 1) {
          solvedIndexesStorage.push(idx);
        } else {
          unSolvedIndexesStorage.push(idx);
        }
      } else {
        array[idx] = 0;
        unSolvedIndexesStorage.push(idx);
      }
    }
    return [array, solvedIndexesStorage, unSolvedIndexesStorage];
  }, []);

  const handwritingArray = useSelector(state => state.miniGame.handwriting);
  const dispatch = useDispatch();
  const [solvedIndicatorArray, solvedStorage, unSolvedStorage] = useMemo(() => solvedArrayConverter(handwritingArray[sectorNum].toString(2), CONVERTED_MAJORS[sectorNum].length), [handwritingArray]);
  console.log('handwriting', handwritingArray);
  console.log('solved', solvedIndicatorArray, solvedStorage, unSolvedStorage);

  // useEffect(() => {
  //   dispatch(actions.reset());
  // }, []);

  // Unsolved problems: indexes --> Currently temporary implementation
  const shuffledIndexes = useMemo(() => shuffleArray(unSolvedStorage), [unSolvedStorage]);
  console.log('shuffledindex:', shuffledIndexes);
  // Real Location
  const [currentLoc, setCurrentLoc] = useState(shuffledIndexes[0]);
  // Shuffled Location
  const [currentShuffledLoc, setCurrentShuffledLoc] = useState(0);
  const { modalComponent: miniGameModalComponent, setIsModalOpen: setIsMiniGameModalOpen } = useModal(MiniGameGuide);
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);

  const [shouldChangeLoc, setShouldChangeLoc] = useState(false);
  // useEffect(() => {
  //   console.log('shuffled index change!');
  //   setShouldChangeLoc(true);
  // }, [shuffledIndexes]);

  const submit = () => {
    if (sha256(value.toLowerCase()) === CONVERTED_MAJORS[sectorNum][currentLoc]) {
      const sectorBinary = handwritingArray[sectorNum].toString(2);
      const unsubmitted = sectorBinary.length > currentLoc
        ? parseInt(sectorBinary[sectorBinary.length - 1 - currentLoc], 10) : 0;
      if (unsubmitted == 0) {
        toast('정답입니다🎉');
        clear();
      } else {
        toast('이미 클리어했습니다 ㅡ.ㅡ');
      }
      speakRightorWrong(true);
      confettiRightorWrong(isMobile, true);
    } else {
      toast('오답입니다😅');
      speakRightorWrong(false);
      confettiRightorWrong(isMobile, false);
    }
  };

  const clear = () => {
    if (isAuthorized) {
      let newArray = [...handwritingArray];
      newArray[sectorNum] += (2 ** currentLoc);
      console.log(newArray);
      dispatch(actions.setFirestoreHandwriting(user, newArray));
    } else {
      setIsSignInModalOpen(true);
    }
  };

  useEffect(() => {
    setValue('');
  }, [currentLoc]);

  const handleIndex = (i) => {
    setCurrentLoc(shuffledIndexes[i]);
    setCurrentShuffledLoc(i);
    console.log(shuffledIndexes[i]);
    console.log(i);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      submit();
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
  }, []);
  return (
    <>
      <S.Content>
        <Indicator
          solvedIndicatorArray={solvedIndicatorArray}
          i={currentShuffledLoc}
        />
        <S.SliderContent>
          <DiscreteCarousel
            sectorNum={sectorNum}
            indexes={shuffledIndexes}
            width={Math.min(theme.windowWidth, theme.windowHeight * 0.75)}
            shouldChangeLoc={shouldChangeLoc}
            emitCurrentIndex={handleIndex}
          />
        </S.SliderContent>
        <S.Answer width={isMobile ? theme.windowWidth : 750}>
          <S.InputBox value={value} onChange={onChange} />
          <S.Button onKeyPress={handleKeyPress} onClick={submit}>제출</S.Button>
        </S.Answer>
      </S.Content>
      {miniGameModalComponent}
      {signInModalComponent}
    </>
  );
}

QuestionBox.propTypes = {

  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

QuestionBox.defaultProps = {
};

export default withTheme(QuestionBox);