import React, { useState, useCallback } from 'react';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';
import Map from '@C/activity/mini/handwriting/Map';
import QuestionSector from '@C/activity/mini/handwriting/question/QuestionSector';
import PropTypes from 'prop-types';
import { COLLEGES } from '@C/activity/mini/handwriting/data.js';

import FullScreen from '@/foundations/full-screen/HandwritingFullScreen';
import * as S from './styles';

function Handwriting({ theme }) {
  const [sectorNum, setSectorNum] = useState(1);
  const handleClick = useCallback((i) => {
    setSectorNum(i);
  }, []);

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

    </S.StyledHandwriting>
  );
}
export default withTheme(Handwriting);

Handwriting.propTypes = {

};
