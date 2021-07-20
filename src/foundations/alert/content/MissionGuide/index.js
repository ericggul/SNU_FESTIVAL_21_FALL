import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Close from '@I/icon/close.svg';
import { useHistory } from 'react-router';
import * as S from './styles';

function MissionGuide({ setIsAlertOpen, stamp, name }) {
  const history = useHistory();
  const goToHome = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <S.MissionGuideBox>
      하이
    </S.MissionGuideBox>
  );
}
export default MissionGuide;

MissionGuide.propTypes = {
  setIsAlertOpen: PropTypes.func.isRequired,
  stamp: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
