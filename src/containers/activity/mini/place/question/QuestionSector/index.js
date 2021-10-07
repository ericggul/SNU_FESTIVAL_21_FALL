import React from 'react';
import PropTypes from 'prop-types';
import { useUser } from '@U/hooks/useAuth';
import withUser from '@U/hoc/withUser';
import QuestionBox from '@C/activity/mini/place/question/QuestionBox';
import { ConfettiRightorWrong } from '@C/activity/mini/place/question/QuestionBox/reactions.js';
import * as S from './styles';

function QuestionSector({ sectorNum, setSectorNum }) {
  const { user, isAuthorized } = useUser();

  const changeTF = (val) => {
    if (val) {
      setTimeout(() => {
        setSectorNum(-1);
      }, 3000);
    }
  };

  return (
    <S.StyledQuestionSector>
      <ConfettiRightorWrong tf={-1} />
      <QuestionBox
        sectorNum={sectorNum}
        changeTF={changeTF}
        user={user}
        isAuthorized={isAuthorized}
      />
    </S.StyledQuestionSector>
  );
}
export default withUser(QuestionSector);

QuestionSector.propTypes = {

};
