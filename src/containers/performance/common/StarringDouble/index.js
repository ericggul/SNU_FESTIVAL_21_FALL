import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Starring from '@C/performance/common/Starring';
import * as S from './styles';

function Title({ DATA }) {
  const today = new Date();
  const date = today.getDate();
  const [currentDate, setCurrentDate] = useState(date >= 5 ? 1 : 0);
  const HEADERS = ['4일 (목)', '5일 (금)'];

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Pointer selected={currentDate === 1} onClick={() => setCurrentDate(0)}>{'<'}</S.Pointer>
        <S.Header selected={currentDate === 0} onClick={() => setCurrentDate(0)}>{HEADERS[0]}</S.Header>
        <S.Header selected={currentDate === 1} onClick={() => setCurrentDate(1)}>{HEADERS[1]}</S.Header>
        <S.Pointer selected={currentDate === 0} onClick={() => setCurrentDate(1)}>{'>'}</S.Pointer>
      </S.HeaderContainer>

      <Starring data={DATA[currentDate]} />
    </S.Container>
  );
}
export default Title;

Title.propTypes = {
};
