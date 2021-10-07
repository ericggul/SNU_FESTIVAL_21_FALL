import React, {
  useEffect, useCallback, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import useInput from '@U/hooks/useInput';
import { sha256 } from 'js-sha256';
import { toast } from 'react-toastify';
import useModal from '@U/hooks/useModal';
import MiniGameGuide from '@F/modal/content/MiniGameGuide';
import { CONVERTED_PLACES } from '@C/activity/mini/place/data.js';

import { withTheme } from 'styled-components';

import SignInGuide from '@F/modal/content/SignInGuide';
import { useDispatch, useSelector } from 'react-redux';
import NeutralRio from '@I/activity/place/NeutralRio.png';
import RightRio from '@I/activity/place/RightRio.png';
import WrongRio from '@I/activity/place/WrongRio.png';
import { actions } from '@/redux/mini-game/state';
import DiscreteCarousel from '@/foundations/carousel/PlaceCarousel';
import { speakRightorWrong, ConfettiRightorWrong } from './reactions.js';

import * as S from './styles';

export function QuestionBox({
  sectorNum, changeTF, user, isAuthorized, theme,
}) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme]);
  const [lastAttemptRight, setLastAttemptRight] = useState(0);
  const { value, onChange, setValue } = useInput('');
  let places = useSelector(state => state.miniGame.place);
  const dispatch = useDispatch();

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

  const [indexes, setIndexes] = useState(incrementArrayConverter(sectorNum === 5 ? 3 : 4));

  const { modalComponent: miniGameModalComponent, setIsModalOpen: setIsMiniGameModalOpen } = useModal(MiniGameGuide);
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);

  const submit = () => {
    if (sha256(value.toLowerCase()) === CONVERTED_PLACES[sectorNum]) {
      clear();
      speakRightorWrong(true);
      setLastAttemptRight(1);
      changeTF(true);
    } else {
      speakRightorWrong(false);
      setLastAttemptRight(-1);
    }
  };

  const clear = () => {
    if (isAuthorized) {
      let newPlaces = [...places];
      newPlaces[sectorNum] = 1;
      console.log('place', newPlaces);
      dispatch(actions.setFirestorePlace(user, newPlaces));
    } else {
      toast('정답입니다🎉');
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
            width={Math.min(theme.windowWidth, theme.windowHeight * 0.8)}
            // emitCurrentIndex={handleIndex}
          />
        </S.SliderContent>
        <S.Description>어디일까요?</S.Description>
        <S.Answer width={isMobile ? theme.windowWidth : 750}>
          <S.InputBox placeholder="백퍼 자하연 아님?" value={value} onChange={onChange} />
          {/* <S.Button onKeyPress={handleKeyPress} onClick={submit}>제출</S.Button> */}
          <S.Image
            src={lastAttemptRight === 1 ? RightRio : (lastAttemptRight === 0 ? NeutralRio : WrongRio)}
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

};

QuestionBox.defaultProps = {

};

export default withTheme(QuestionBox);
