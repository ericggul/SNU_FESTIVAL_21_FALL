import React, {
  useEffect, useCallback, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import useInput from '@U/hooks/useInput';
import { sha256 } from 'js-sha256';
import { toast } from 'react-toastify';
import useModal from '@U/hooks/useModal';
import { CONVERTED_PLACES, DIGITS } from '@C/activity/mini/place/data';

import { getRandomElementFromArray } from '@U/functions/array';
import { withTheme } from 'styled-components';

import SignInGuide from '@F/modal/content/SignInGuide';
import { useDispatch, useSelector } from 'react-redux';
import NeutralRio from '@I/activity/place/NeutralRio.png';
import RightRio from '@I/activity/place/RightRio.png';
import WrongRio from '@I/activity/place/WrongRio.png';
import DiscreteCarousel from '@F/carousel/PlaceCarousel';
import { actions } from '@/redux/mini-game/state';
import { speakRightorWrong, ConfettiRightorWrong } from './reactions';

import * as S from './styles';

export function QuestionBox({
  sectorNum, changeTF, user, isAuthorized, theme,
}) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme]);
  const [lastAttemptRight, setLastAttemptRight] = useState(0);
  const { value, onChange, setValue } = useInput('');
  let places = useSelector(state => state.miniGame.place);
  const dispatch = useDispatch();

  useEffect(() => {
    toast('ex. 느티나무 ✔, 느나 ❎',
      {
        autoClose: 3500, draggable: true,
      });
    toast('장소 이름은 글자수에 맞게!',
      {
        autoClose: 3800, draggable: true,
      });
  }, []);
  const incrementArrayConverter = useCallback((length) => {
    let array = [];
    for (let i = 0; i < length; i += 1) {
      array[i] = i + 1;
    }
    return array;
  }, []);

  const [indexes, setIndexes] = useState(incrementArrayConverter(sectorNum === 5 ? 3 : 4));

  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);

  const wrongToastArray = ['땡', '이것도 못풀어? 🤣', '리오가 울어요 😭', '학교 와본거 맞아? 🤔'];
  let wrongTextArray = [];
  for (let i = 0; i < 100; i += 1) {
    const repeated = '다시 '.repeat(i);
    wrongTextArray.push(`${repeated}시도해보세요`);
  }
  const [wrongAttempt, setWrongAttempt] = useState(0);
  const submit = () => {
    if (sha256(value.toLowerCase()) === CONVERTED_PLACES[sectorNum]) {
      toast('딩동댕! 🛎 🛎️');
      clear();
      speakRightorWrong(true);
      setLastAttemptRight(1);
      changeTF(true);
    } else {
      setWrongAttempt(wr => wr + 1);
      toast(getRandomElementFromArray(wrongToastArray));
      speakRightorWrong(false);
      setLastAttemptRight(-1);
      changeTF(false);
    }
  };

  const clear = () => {
    if (isAuthorized) {
      let newPlaces = [...places];
      newPlaces[sectorNum] = 1;
      console.log('place', newPlaces);
      dispatch(actions.setFirestorePlace(user, newPlaces));
    } else {
      setIsSignInModalOpen(true);
    }
  };

  return (
    <>
      <S.Content>
        <S.SliderContent>
          <DiscreteCarousel
            sectorNum={sectorNum}
            indexes={indexes}
            width={Math.min(theme.windowWidth, theme.windowHeight * 0.65)}
            // emitCurrentIndex={handleIndex}
          />
        </S.SliderContent>
        <S.Description>{lastAttemptRight === 1 ? '정답입니다!' : (lastAttemptRight === 0 ? '어디일까요?' : wrongTextArray[wrongAttempt])}</S.Description>
        <S.Answer width={isMobile ? theme.windowWidth : 750}>
          <S.InputBox placeholder={`백퍼 총장잔디 아님? (${DIGITS[sectorNum]}글자)`} value={value} onChange={onChange} />
          {/* <S.Button onKeyPress={handleKeyPress} onClick={submit}>제출</S.Button> */}
          <S.Image
            src={lastAttemptRight === 1 ? RightRio : (lastAttemptRight === 0 ? NeutralRio : WrongRio)}
            onClick={submit}
            width={Math.min(theme.windowWidth * 0.3, theme.windowHeight * 0.2)}
            height={Math.min(theme.windowWidth * 0.3, theme.windowHeight * 0.2)}
          />
          <S.RioDescription>리오를 눌러 정답을 확인하세요</S.RioDescription>
        </S.Answer>

      </S.Content>
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
