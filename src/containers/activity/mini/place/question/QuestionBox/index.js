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

import { useUser } from '@U/hooks/useAuth';
import useMiniGame from '@U/hooks/useMiniGame';
import withUser from '@U/hoc/withUser';
import SignInGuide from '@F/modal/content/SignInGuide';
import { useDispatch } from 'react-redux';
import DiscreteCarousel from '@/foundations/carousel/PlaceCarousel';
import { speakRightorWrong, confettiRightorWrong } from './reactions.js';
import { actions } from '@/redux/mini-game/state';
import * as S from './styles';

export function QuestionBox({
  sectorNum, answerColor, user, isAuthorized, isNotCompleted, theme,
}) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme]);
  const [step, setStep] = useState(0);
  const { value, onChange, setValue } = useInput('');

  const incrementArrayConverter = useCallback((length) => {
    let array = [];
    for (let i = 0; i < length; i += 1) {
      array[i] = i;
    }
    return array;
  }, []);
  // Unsolved problems: indexes --> Currently temporary implementation
  const [indexes, setIndexes] = useState(incrementArrayConverter(CONVERTED_MAJORS[sectorNum].length));
  const shuffledIndexes = useMemo(() => shuffleArray(indexes), [indexes]);
  const [currentLoc, setCurrentLoc] = useState(shuffledIndexes[0]);
  const { modalComponent: miniGameModalComponent, setIsModalOpen: setIsMiniGameModalOpen } = useModal(MiniGameGuide);
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);

  const goToNextStep = () => {
    setTimeout(() => setStep(step + 1), 1000);
    setValue('');

    const element = document.querySelector('.QuestionImage');
    element.style.display = 'none';
    const triggerReflow = element.offsetWidth;
    element.style.display = 'block';
  };

  const dispatch = useDispatch();
  const clear = () => {
    if (isAuthorized) {
      if (isNotCompleted) {
        dispatch(actions.setFirestoreStage(user, 'stage3', true));
        setIsMiniGameModalOpen(true);
      } else {
        toast('이미 클리어하셨습니다 😇');
      }
    } else {
      toast('정답입니다🎉');
      setIsSignInModalOpen(true);
    }
  };

  const submit = () => {
    if (sha256(value.toLowerCase()) === CONVERTED_MAJORS[sectorNum][currentLoc]) {
      if (step < 2) {
        toast('정답입니다🎉');
        speakRightorWrong(true);
        confettiRightorWrong(isMobile, true);
      } else {
        clear();
      }
    } else {
      toast('오답입니다😅');
      speakRightorWrong(false);
      confettiRightorWrong(isMobile, false);
    }
  };

  useEffect(() => {
    setValue('');
  }, [currentLoc]);

  const handleIndex = (i) => {
    console.log(i);
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
          <S.InputBox value={value} onChange={onChange} color={answerColor} />
          <S.Button onKeyPress={handleKeyPress} onClick={submit}>제출</S.Button>
        </S.Answer>
      </S.Content>
      {miniGameModalComponent}
      {signInModalComponent}
    </>
  );
}

QuestionBox.propTypes = {
  answerColor: PropTypes.string,

  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  isNotCompleted: PropTypes.bool.isRequired,

};

QuestionBox.defaultProps = {
  answerColor: null,
};

function QuestionBoxParent(props) {
  const { user, isAuthorized } = useUser();
  const miniGame = useMiniGame();
  const isNotCompleted = useMemo(() => (
    miniGame.isLoaded && !miniGame.stage3), [miniGame.isLoaded, miniGame.stage3]);

  return <QuestionBox {...props} user={user} isAuthorized={isAuthorized} isNotCompleted={isNotCompleted} />;
}
export default withTheme(withUser(QuestionBoxParent));
