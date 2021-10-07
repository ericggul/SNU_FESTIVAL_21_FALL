import React from 'react';
import PropTypes from 'prop-types';
import QuestionBox from '@C/activity/mini/handwriting/question/QuestionBox';
import { useUser } from '@U/hooks/useAuth';
import withUser from '@U/hoc/withUser';
import * as S from './styles';

function QuestionSector({ sectorNum }) {
  const { user, isAuthorized } = useUser();
  return (
    <S.StyledQuestionSector>
      <QuestionBox sectorNum={sectorNum} user={user} isAuthorized={isAuthorized} />
    </S.StyledQuestionSector>
  );
}
export default withUser(QuestionSector);

QuestionSector.propTypes = {

};
