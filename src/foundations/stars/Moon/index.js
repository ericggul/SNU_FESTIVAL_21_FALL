import React, { useEffect } from 'react';
import * as S from './styles';

export default function Moon({ top, left, size }) {
  return (
    <S.Container>
      <S.LargeCircle width={70} height={70} top={300} left={100} />

    </S.Container>
  );
}

const getRandom = (a, b) => Math.random() * (b - a) + a;
