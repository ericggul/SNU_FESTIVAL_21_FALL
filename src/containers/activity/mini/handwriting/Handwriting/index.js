import React, { useState, useCallback } from 'react';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';
import Map from '@C/activity/mini/handwriting/Map';
import QuestionSector from '@C/activity/mini/handwriting/question/QuestionSector';
import PropTypes from 'prop-types';
import * as S from './styles';

function Handwriting({ theme }) {
  const [sectorNum, setSectorNum] = useState(1);
  const COLLEGE_NAMES = ['dummy', 'dummy', 'dummy', 'dummy', 'dummy', 'dummy', 'dummy', 'dummy', 'dummy', 'dummy'];
  const handleClick = useCallback((i) => {
    setSectorNum(i);
  }, []);
  return (
    <S.StyledHandwriting>
      <HeaderContent backgroundColor={theme.palette.HANDWRITING_HEADER}>
        {sectorNum === -1 ? '서울대 필기 맞추기' : COLLEGE_NAMES[sectorNum]}
      </HeaderContent>
      <S.Container>
        {sectorNum === -1
          ? (
            <>
              <S.Description>
                단과대 별로 필기를 찾아보세요!
              </S.Description>
              <Map handleClick={handleClick} />
            </>
          )
          : <QuestionSector />}

      </S.Container>
    </S.StyledHandwriting>
  );
}
export default withTheme(Handwriting);

Handwriting.propTypes = {

};
