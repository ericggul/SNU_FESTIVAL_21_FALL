import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useInput from '@U/hooks/useInput';
import { sha256 } from 'js-sha256';
import { toast } from 'react-toastify';
import useModal from '@U/hooks/useModal';
import RiddleCompleteGuide from '@F/modal/content/RiddleCompleteGuide';
import { useUser } from '@U/hooks/useAuth';
import useMiniGame from '@U/hooks/useMiniGame';
import withUser from '@U/hoc/withUser';
import SignInGuide from '@F/modal/content/SignInGuide';
import { useDispatch } from 'react-redux';
import { actions } from '@/redux/mini-game/state';
import * as S from './styles';

export function QuestionBox({
  textImg, answerColor, questions, answers, user, isAuthorized, hints, isNotCompleted,
}) {
  const [step, setStep] = useState(0);
  const { value, onChange, setValue } = useInput('');
  const { modalComponent: riddleCompleteComponent, setIsModalOpen: setIsRiddleCompleteOpen } = useModal(RiddleCompleteGuide);
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
      // if (isNotCompleted)

      dispatch(actions.setFirestoreStage(user, 'riddle', true));
      setIsRiddleCompleteOpen(true);
      toast('미션 클리어!');
      setTimeout(() => {
        setIsRiddleCompleteOpen(false);
      }, 2500);

      // else {
      //   toast('이미 클리어하셨습니다 😇');
      // }
    } else {
      toast('정답입니다🎉');
      setIsSignInModalOpen(true);
    }
  };

  const submit = () => {
    if (sha256(value.toLowerCase()) === answers[step]) {
      if (step !== 2) {
        toast('정답입니다🎉');
        goToNextStep();
      } else {
        clear();
        goToNextStep();
      }
    } else {
      toast('오답입니다😅');
    }
  };

  useEffect(() => {
    const today = new Date();
    if (today.getDate() === 4 || today.getDate() === 5) {
      setTimeout(() => {
        toast(hints[step], {
          autoClose: 4500, draggable: true,
        });
      }, 1000);
    }
  }, [step]);

  return (
    <>
      <S.Content>
        <S.TextImage src={textImg} />
        <S.Question className="QuestionImage">
          <S.Image src={questions[step]} alt="문제" />
        </S.Question>
        <S.Answer>
          <S.InputBox value={value} onChange={onChange} color={answerColor} placeholder="뭐게" />
          <S.Button onClick={submit}>등록</S.Button>
        </S.Answer>
      </S.Content>
      {riddleCompleteComponent}
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
    miniGame.isLoaded && !miniGame.riddle), [miniGame.isLoaded, miniGame.riddle]);

  return <QuestionBox {...props} user={user} isAuthorized={isAuthorized} isNotCompleted={isNotCompleted} />;
}
export default withUser(QuestionBoxParent);
