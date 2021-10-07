import React, { useMemo, useState, useCallback } from 'react';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';
import useModal from '@U/hooks/useModal';
import Map from '@C/activity/mini/handwriting/Map';
import QuestionSector from '@C/activity/mini/handwriting/question/QuestionSector';
import PropTypes from 'prop-types';
import { COLLEGES } from '@C/activity/mini/handwriting/data.js';
import withUser from '@U/hoc/withUser';
import SignInGuide from '@F/modal/content/SignInGuide';
import { useUser } from '@U/hooks/useAuth';
import useMiniGame from '@U/hooks/useMiniGame';

import FullScreen from '@/foundations/full-screen/HandwritingFullScreen';
import * as S from './styles';

function Handwriting({ theme }) {
  const { user, isAuthorized } = useUser();
  const miniGame = useMiniGame();

  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);

  const [sectorNum, setSectorNum] = useState(-1);
  const handleClick = useCallback((i) => {
    if (!isAuthorized) {
      setIsSignInModalOpen(true);
      return;
    }
    setSectorNum(i);
  }, [isAuthorized]);

  return (
    <S.StyledHandwriting>
      <HeaderContent backgroundColor={theme.palette.HANDWRITING_HEADER}>
        '서울대 필기 맞추기'
      </HeaderContent>

      <S.Container>

        <S.Description>
          단과대 별로 필기를 찾아보세요!
        </S.Description>
        <Map handleClick={handleClick} />

      </S.Container>
      <FullScreen
        isFullScreen={sectorNum !== -1}
        onCloseFullScreen={() => setSectorNum(-1)}
        backgroundColor={theme.palette.HANDWRITING_PURPLE}
        headerName={COLLEGES[sectorNum]}
      >
        <QuestionSector sectorNum={sectorNum} />
      </FullScreen>
      {signInModalComponent}
    </S.StyledHandwriting>
  );
}

Handwriting.propTypes = {

};

export default withTheme(withUser(Handwriting));
