import React, { useMemo } from 'react';
import useInput from '@U/hooks/useInput';
import { toast } from 'react-toastify';
import { useUser } from '@U/hooks/useAuth';
import withUser from '@U/hoc/withUser';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import useMiniGame from '@U/hooks/useMiniGame';
import MiniGameGuide from '@F/modal/content/MiniGameGuide';
import { sha256 } from 'js-sha256';
import { actions } from '@/redux/mini-game/state';
import * as S from './styles';

const answers = [
  '37a1638a11ff785623522efc5c319fc72e00d933fefebdfa13dd37584305fbba',
  'd0a5cf495a1ea4c47693c0faa9c18d33718ae3e4e5fdd415d3d7d14f0ae9c558',
  '6c94e35ccc352d4e9ef0b99562cff995a5741ce8de8ad11b568892934daee366',
  '2c61dbb46d929bf7688981601c656aa88dcdf92b7edb007e26df561a69cfc299',
  'd96d004f47c5206a4511b96545ead7f00c5003b1afb2bad3576b0806bd4b23a7',
];

export function Answer({ user, isAuthorized, isNotCompleted }) {
  const { value: first, onChange: onChangeFirst } = useInput('', answerConstraint);
  const { value: second, onChange: onChangeSecond } = useInput('', answerConstraint);
  const { value: third, onChange: onChangeThird } = useInput('', answerConstraint);

  const correctAnswers = useMemo(() => (
    new Set([first, second, third].map(answer => sha256(answer)).filter(answer => answers.includes(answer)))
  ), [first, second, third]);

  const dispatch = useDispatch();
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);
  const { modalComponent: miniGameModalComponent, setIsModalOpen: setIsMiniGameModalOpen } = useModal(MiniGameGuide);

  const submit = () => {
    const correctCount = correctAnswers.size;
    if (correctCount < 3) {
      toast(`오답입니다😅 (${correctCount}/3)`);
      return;
    }

    if (isAuthorized) {
      if (isNotCompleted) {
        dispatch(actions.setFirestoreStage(user, 'stage1', true));
        setIsMiniGameModalOpen(true);
      } else {
        toast('이미 클리어하셨습니다 😇');
      }
    } else {
      toast('정답입니다🎉');
      setIsSignInModalOpen(true);
    }
  };

  return (
    <>
      <S.StyledAnswer>
        <S.Inputs>
          <S.InputBox placeholder="뭐게요" value={first} onChange={onChangeFirst} />
          <S.InputBox placeholder="맞혀봐요" value={second} onChange={onChangeSecond} />
          <S.InputBox placeholder="응?" value={third} onChange={onChangeThird} />
        </S.Inputs>
        <S.Button onClick={submit}>정답!</S.Button>
      </S.StyledAnswer>
      {signInModalComponent}
      {miniGameModalComponent}
    </>
  );
}

Answer.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  isNotCompleted: PropTypes.bool.isRequired,
};

function AnswerParent() {
  // TODO: withUser 의 user, isAuthorized prop 활용
  const { user, isAuthorized } = useUser();
  const miniGame = useMiniGame();
  const isNotCompleted = useMemo(() => (
    miniGame.isLoaded && !miniGame.stage1), [miniGame.isLoaded, miniGame.stage1]);

  return <Answer user={user} isAuthorized={isAuthorized} isNotCompleted={isNotCompleted} />;
}
export default withUser(AnswerParent);

function answerConstraint(value) {
  const regex = /^[ㄱ-ㅎ가-힣0-9]*$/;
  return value.length <= 6 && regex.test(value);
}
