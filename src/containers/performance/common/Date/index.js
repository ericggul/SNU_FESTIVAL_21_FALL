import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { transition } from '@C/performance/Performance';
import * as S from './styles';

function Date({ date }) {
  const history = useHistory();
  const send = useCallback((location) => {
    history.push(`/performance/${location}`);
  }, [history]);

  return (
    <S.StyledDate
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{
        ...transition,
        delay: 0.9,
      }}
    >
      <S.SingleDate onClick={() => send('phone-cert')}>
        <S.Day>화</S.Day>
        <S.Date isSelected={date === 26}>26</S.Date>
      </S.SingleDate>
      <S.SingleDate onClick={() => send('hit-the-stage')}>
        <S.Day>수</S.Day>
        <S.Date isSelected={date === 27}>27</S.Date>
      </S.SingleDate>
      <S.SingleDate onClick={() => send('sing-stealer')}>
        <S.Day>목</S.Day>
        <S.Date isSelected={date === 28}>28</S.Date>
      </S.SingleDate>
      <S.SingleDate onClick={() => send('game-tournament')}>
        <S.Day>금</S.Day>
        <S.Date isSelected={date === 29}>29</S.Date>
      </S.SingleDate>
    </S.StyledDate>
  );
}
export default Date;

Date.propTypes = {
  date: PropTypes.number.isRequired,
};
