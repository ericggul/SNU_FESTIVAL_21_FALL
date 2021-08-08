import React, { useEffect, useMemo } from 'react';
import useAudio from '@U/hooks/useAudio';
import SongFiveThird from '@/static/audio/song-5-3.mp3';
import * as S from './styles';
import { startAnimations } from '../functions';
import { basePropTypes } from '../values';

Explosion3.propTypes = basePropTypes;

function Explosion3({ trigger, dispatch }) {
  const [, playAudio] = useAudio(SongFiveThird);
  const rotate = Math.random() * 360;

  useEffect(() => {
    ExplosionCircles = document.querySelectorAll('.Explosion3Circle');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimations(ExplosionCircles, cancelAnimation, 700);
      dispatch({ type: 'toggle', key: 'triggerO' });
    }
  }, [trigger]);

  const Circles = useMemo(() => (
    [...Array(100).keys()].map((i) => {
      const radius = 15 + Math.random() * 25;
      return (
        <S.Group
          index={i}
          key={i}
        >
          <S.Circle
            className="Explosion3Circle"
            r={radius}
            cx="0"
            cy="0"
            fill="transparent"
            index={i}
            translate={
              { x: 10 + Math.round(Math.random() * 80), y: 10 + Math.round(Math.random() * 80) }
            }
          />
        </S.Group>
      );
    })
  ), []);

  return (
    <S.StyledExplosion3
      className="Explosion3"
    >
      <S.Svg
        rotate={rotate}
      >
        {Circles}
      </S.Svg>
    </S.StyledExplosion3>
  );
}
export default React.memo(Explosion3);

let ExplosionCircles = null;
const cancelAnimation = { listener: null };
