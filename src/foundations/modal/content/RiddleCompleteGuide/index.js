import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Close from '@I/icon/close.svg';
import * as S from './styles';

function RiddleCompleteGuide({ setIsModalOpen }) {
  const history = useHistory();
  const goToHome = useCallback(() => {
    history.push('/activity/mini');
  }, [history]);

  return (
    <S.RiddleCompleteGuideBox>
      <S.ContentBox>
        <p>MISSION ACCOMPLISHED!</p>
        <p>미션은 끝났지만 게임은 계속됩니다..</p>
      </S.ContentBox>
    </S.RiddleCompleteGuideBox>
  );
}
export default RiddleCompleteGuide;

RiddleCompleteGuide.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};
