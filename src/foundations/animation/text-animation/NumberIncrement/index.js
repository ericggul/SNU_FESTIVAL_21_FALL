import React, { useState, useEffect } from 'react';
import numberIcon from '@I/guest-book/numberIcon.svg';
import PropTypes from 'prop-types';
import * as S from './styles';

function NumberIncrement({ number }) {
  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = `0${num}`;
    return num;
  }
  const padNumber = (num) => (num > 999 ? pad(num, 4) : pad(num, 3));

  const [currentNumber, setCurrentNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setCurrentNumber(0);
  }

  function update() {
    requestAnimationFrame(update);
    setCurrentNumber(currentNumber => currentNumber + Math.random() * (number - currentNumber) / 30);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

  useEffect(() => {
    if (number > 0 && loading) {
      requestAnimationFrame(update);
      return () => cancelAnimationFrame(update);
    }
  }, [number, loading]);

  return (
    <S.CommentsNumber onClick={handleClick}>
      <S.CommentImage src={numberIcon} />
      {padNumber(Math.ceil(currentNumber))}
    </S.CommentsNumber>
  );
}
export default NumberIncrement;

NumberIncrement.propTypes = {
  number: PropTypes.number.isRequired,
};
