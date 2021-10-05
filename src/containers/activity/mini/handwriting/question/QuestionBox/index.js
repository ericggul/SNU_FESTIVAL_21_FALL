import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '@U/hooks/useInput';
import Slider from 'react-slick';
import { sha256 } from 'js-sha256';
import { toast } from 'react-toastify';
import useModal from '@U/hooks/useModal';
import MiniGameGuide from '@F/modal/content/MiniGameGuide';
import { MapInteractionCSS } from 'react-map-interaction';

import DummyOne from '@I/activity/handwriting/question/dummy1.png';
import DummyTwo from '@I/activity/handwriting/question/dummy2.png';
import DummyThree from '@I/activity/handwriting/question/dummy3.png';

import { useUser } from '@U/hooks/useAuth';
import useMiniGame from '@U/hooks/useMiniGame';
import withUser from '@U/hoc/withUser';
import SignInGuide from '@F/modal/content/SignInGuide';
import { actions } from '@/redux/mini-game/state';
import { useDispatch } from 'react-redux';
import * as S from './styles';

export function QuestionBox({
  answerColor, questions, answers, user, isAuthorized, isNotCompleted, hints,
}) {
  const [step, setStep] = useState(0);
  const { value, onChange, setValue } = useInput('');
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
    if (sha256(value.toLowerCase()) === answers[step]) {
      if (step < 2) {
        toast('정답입니다🎉');
        goToNextStep();
      } else {
        clear();
      }
    } else {
      toast('오답입니다😅');
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <S.Content>
        <S.SliderContent>
          <Slider {...settings}>
            <S.Question>
              <MapInteractionCSS>
                <S.Image
                  src={DummyOne}
                  alt="문제"
                />
              </MapInteractionCSS>
            </S.Question>
            <S.Question>
              <MapInteractionCSS>
                <S.Image
                  src={DummyTwo}
                  alt="문제"
                />
              </MapInteractionCSS>
            </S.Question>
            <S.Question>
              <MapInteractionCSS>
                <S.Image
                  src={DummyThree}
                  alt="문제"
                />
              </MapInteractionCSS>
            </S.Question>
          </Slider>

        </S.SliderContent>

        <S.Answer>
          <S.InputBox value={value} onChange={onChange} color={answerColor} placeholder={hints[step]} />
          <S.Button onClick={submit}>등록</S.Button>
        </S.Answer>
      </S.Content>
      {miniGameModalComponent}
      {signInModalComponent}
    </>
  );
}

QuestionBox.propTypes = {
  answerColor: PropTypes.string,
  questions: PropTypes.arrayOf(PropTypes.string).isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  isNotCompleted: PropTypes.bool.isRequired,
  hints: PropTypes.arrayOf(PropTypes.string).isRequired,
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
export default withUser(QuestionBoxParent);
