import React, { useState } from 'react';
import character1 from '@I/guest-book/character1.svg';
import character2 from '@I/guest-book/character2.svg';
import character3 from '@I/guest-book/character3.svg';
import character4 from '@I/guest-book/character4.svg';
import character5 from '@I/guest-book/character5.svg';
import character6 from '@I/guest-book/character6.svg';
import character7 from '@I/guest-book/character7.svg';
import character8 from '@I/guest-book/character8.svg';
import PropTypes from 'prop-types';
import * as S from './styles';

const characters = [
  character1, character2, character3, character4, character5, character6, character7, character8,
];

function MoonCharacter({ number, boxShadow }) {
  const [animate, setAnimate] = useState(0);
  return (
    <S.ImageWrapper>
      <S.ProfileImage src={characters[number % characters.length]} animate={animate} boxShadow={boxShadow} onClick={() => setAnimate(Math.ceil(Math.random() * 5))} />
    </S.ImageWrapper>
  );
}
export default MoonCharacter;

MoonCharacter.propTypes = {
  number: PropTypes.number.isRequired,
};
