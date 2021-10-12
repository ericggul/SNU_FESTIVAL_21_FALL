import React, { useState, useEffect, useCallback } from 'react';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';
import useModal from '@U/hooks/useModal';
import OmokGuide from '@F/modal/content/OmokGuide';
import PropTypes from 'prop-types';

import Board from '@I/activity/omok/board.png';
import Black from '@I/activity/omok/black.png';
import White from '@I/activity/omok/white.png';
import * as S from './styles';

function Omok({ theme }) {
  const [mode, setMode] = useState(null);
  const { modalComponent: omokModalComponent, setIsModalOpen: setIsOmokModalOpen } = useModal(OmokGuide, { mode });

  const transit = useCallback((ver) => {
    setMode(ver);
    setIsOmokModalOpen(true);
  }, [mode, setIsOmokModalOpen]);
  return (
    <S.StyledOmok>
      <HeaderContent backgroundColor={theme.palette.OMOK_PURPLE}>
        오목
      </HeaderContent>
      <S.Container>
        <S.BlackDot top={300} left={100} />
        <S.Sector>
          <S.Board src={Board} />
          <S.Info>10분마다 줌 입장</S.Info>
        </S.Sector>
        <S.Sector>
          <S.Links>
            <S.SingleLink onClick={() => transit('black')}>
              <S.Image src={Black} />
              <S.Text>게임 설명</S.Text>
            </S.SingleLink>
            <S.SingleLink onClick={() => transit('white')}>
              <S.Image src={White} />
              <S.Text>참여 방법</S.Text>
            </S.SingleLink>
          </S.Links>
          <S.Button>줌 링크 바로 가기</S.Button>
        </S.Sector>
      </S.Container>
      {omokModalComponent}
    </S.StyledOmok>
  );
}
export default withTheme(Omok);

Omok.propTypes = {

};
