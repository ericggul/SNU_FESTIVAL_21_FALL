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
import { MAJORS, CONVERTED_MAJORS } from '@C/activity/mini/handwriting/data.js';

import { withTheme } from 'styled-components';

import DummyOne from '@I/activity/handwriting/question/dummy1.png';
import DummyTwo from '@I/activity/handwriting/question/dummy2.png';
import DummyThree from '@I/activity/handwriting/question/dummy3.png';

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
  const handwritingArray = useSelector(state => state.miniGame.handwriting);
  const dispatch = useDispatch();

  console.log(handwritingArray);

  // useEffect(() => {
  //   dispatch(actions.reset());
  // }, []);

  const incrementArrayConverter = useCallback((length) => {
    let array = [];
    for (let i = 0; i < length; i += 1) {
      array[i] = i;
    }
    return array;
  }, []);
  // Unsolved problems: indexes --> Currently temporary implementation
  const [indexes, setIndexes] = useState(incrementArrayConverter(CONVERTED_MAJORS[sectorNum].length));
  // const [unsolvedIndexes, setUnsolvedIndexes] = useState();
  // useEffect(()=>{
  //   let result;
  //   const sectorBinary = handwritingArray[sectorNum].toString(2);

  // }, []);
  const shuffledIndexes = useMemo(() => shuffleArray(indexes), [indexes]);
  const [currentLoc, setCurrentLoc] = useState(shuffledIndexes[0]);
  const { modalComponent: miniGameModalComponent, setIsModalOpen: setIsMiniGameModalOpen } = useModal(MiniGameGuide);
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);

  const submit = () => {
    if (sha256(value.toLowerCase()) === CONVERTED_MAJORS[sectorNum][currentLoc]) {
      const sectorBinary = handwritingArray[sectorNum].toString(2);
      const unsubmitted = sectorBinary.length > currentLoc
        ? sectorBinary[sectorBinary.length - 1 - currentLoc] : '0';

      if (unsubmitted === '0') {
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
      toast('정답입니다🎉');
      setIsSignInModalOpen(true);
    }
  };

  useEffect(() => {
    setValue('');
  }, [currentLoc]);

  const handleIndex = (i) => {
    setCurrentLoc(i);
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
        <S.SliderContent>
          <DiscreteCarousel
            sectorNum={sectorNum}
            indexes={shuffledIndexes}
            width={Math.min(theme.windowWidth, theme.windowHeight * 0.8)}
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
