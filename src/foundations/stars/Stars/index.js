import React, { useEffect } from 'react';
import * as S from './styles';

export default function Stars({ top, left, size }) {
  return (
    <S.Container>
      <StarQuatro top={100} left={100} />
      <StarMulti top={300} left={300} spikes={8} />
    </S.Container>
  );
}

const getRandom = (a, b) => Math.random() * (b - a) + a;

const StarQuatro = ({ top, left, size }) => {
  const tilted = getRandom(-2, 2);
  const subAxisAngle = getRandom(40, 50);
  return (
    <>
      <S.DivLine width={3} height={70} top={top} left={left} angle={tilted + subAxisAngle} />
      <S.DivLine width={4} height={100} top={top} left={left} angle={tilted} />
      <S.DivLine width={4} height={100} top={top} left={left} angle={tilted + 90} />
      <S.DivLine width={3} height={60} top={top} left={left} angle={tilted + 180 - subAxisAngle} />
    </>
  );
};

const StarMulti = ({
  top, left, size, spikes,
}) => {
  const tilted = getRandom(-2, 2);

  return (
    <>
      {
        new Array(spikes).fill(0).map((e, i) => (
          <S.DivLine width={2} height={i === 0 || i === spikes / 2 ? 80 : i % (spikes / 4) === 0 ? 60 : 40} top={top} left={left} angle={tilted + i * 180 / spikes} />
        ))
      }
    </>
  );
};
