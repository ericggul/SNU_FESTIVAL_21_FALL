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
import { CONVERTED_PLACES } from '@C/activity/mini/place/data.js';

import NeutralRio from '@I/activity/place/NeutralRio.png';
import RightRio from '@I/activity/place/RightRio.png';
import WrongRio from '@I/activity/place/WrongRio.png';

import { withTheme } from 'styled-components';

import { useUser } from '@U/hooks/useAuth';
import useMiniGame from '@U/hooks/useMiniGame';
import withUser from '@U/hoc/withUser';
import SignInGuide from '@F/modal/content/SignInGuide';
import { useDispatch } from 'react-redux';
import DiscreteCarousel from '@/foundations/carousel/PlaceCarousel';
import { speakRightorWrong, ConfettiRightorWrong } from './reactions.js';
import { actions } from '@/redux/mini-game/state';
import * as S from './styles';

export function QuestionBox({
  sectorNum, user, isAuthorized, isNotCompleted, theme,
}) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme]);
  const [lastAttemptRight, setLastAttemptRight] = useState(0);
  const [step, setStep] = useState(0);
  const { value, onChange, setValue } = useInput('');

  // SIZE CONVERTER for Image
  const convert = useCallback((val) => {
    const result = isMobile ? (theme.windowWidth / 375) * val : (768 / 375) * val;
    return result;
  }, []);

  const incrementArrayConverter = useCallback((length) => {
    let array = [];
    for (let i = 0; i < length; i += 1) {
      array[i] = i + 1;
    }
    return array;
  }, []);
  // Unsolved problems: indexes --> Currently temporary implementation
  const [indexes, setIndexes] = useState(incrementArrayConverter(sectorNum === 5 ? 3 : 4));
  const [currentLoc, setCurrentLoc] = useState(0);
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
    if (sha256(value.toLowerCase()) === CONVERTED_PLACES[sectorNum]) {
      if (step < 2) {
        speakRightorWrong(true);

        setLastAttemptRight(1);
      } else {
        clear();
      }
    } else {
      speakRightorWrong(false);

      setLastAttemptRight(-1);
    }
  };

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
      <ConfettiRightorWrong tf={lastAttemptRight} />
      <S.Content>
        <S.SliderContent>
          <DiscreteCarousel
            sectorNum={sectorNum}
            indexes={indexes}
            width={Math.min(theme.windowWidth, theme.windowHeight * 0.8)}
            emitCurrentIndex={handleIndex}
          />
        </S.SliderContent>
        <S.Description>어디일까요?</S.Description>
        <S.Answer width={isMobile ? theme.windowWidth : 750}>
          <S.InputBox placeholder="백퍼 자하연 아님?" value={value} onChange={onChange} />
          {/* <S.Button onKeyPress={handleKeyPress} onClick={submit}>제출</S.Button> */}
          <S.Image
            src={lastAttemptRight === 1 ? RightRio : (lastAttemptRight === 0 ? NeutralRio : WrongRio)}
            onKeyPress={handleKeyPress}
            onClick={submit}
            width={convert(136)}
            height={convert(136)}
          />
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
  isNotCompleted: PropTypes.bool.isRequired,

};

QuestionBox.defaultProps = {

};

function QuestionBoxParent(props) {
  const { user, isAuthorized } = useUser();
  const miniGame = useMiniGame();
  const isNotCompleted = useMemo(() => (
    miniGame.isLoaded && !miniGame.stage3), [miniGame.isLoaded, miniGame.stage3]);

  return <QuestionBox {...props} user={user} isAuthorized={isAuthorized} isNotCompleted={isNotCompleted} />;
}
export default withTheme(withUser(QuestionBoxParent));
