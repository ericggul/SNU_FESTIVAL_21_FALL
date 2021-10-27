import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { transition } from '@C/performance/Performance';
import * as S from './styles';

function Date({ date }) {
  const history = useHistory();
  const send = useCallback((location) => {
    history.push(`/performance/${location}`);
  }, [history]);

  return (
    <S.StyledDate>
      <S.SingleDate onClick={() => send('sing-stealer')}>
        <S.Day>화</S.Day>
        <S.Date isSelected={date.includes(2)}>2</S.Date>
      </S.SingleDate>
      <S.SingleDate onClick={() => send('game-tournament')}>
        <S.Day>수</S.Day>
        <S.Date isSelected={date.includes(3)}>3</S.Date>
      </S.SingleDate>
      <S.SingleDate onClick={() => send('phone-cert')}>
        <S.Day>목</S.Day>
        <S.Date isSelected={date.includes(4)}>4</S.Date>
      </S.SingleDate>
      <S.SingleDate onClick={() => send('hit-the-stage')}>
        <S.Day>금</S.Day>
        <S.Date isSelected={date.includes(5)}>5</S.Date>
      </S.SingleDate>
    </S.StyledDate>
  );
}
export default Date;

Date.propTypes = {

};
