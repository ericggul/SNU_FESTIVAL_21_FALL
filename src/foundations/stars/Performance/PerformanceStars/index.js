import React, { useState, useEffect } from 'react';
import { withTheme } from 'styled-components';
import Moon from '@I/jabti/background/moon.png';
import {
  SmallStarDuo, SmallStarQuatro, LargeStarQuatro, SmallParticleDuo, SmallParticleQuatro, LargeStarMultiple,
} from '@F/stars/StarComponents';
import * as S from './styles';

const getRandom = (a, b) => Math.random() * (b - a) + a;

function Stars({ theme }) {
  const [loading, setLoading] = useState(false);
  const [loc, setLoc] = useState({ top: 0, left: 0 });
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    if (theme.windowWidth > 0 && theme.windowHeight > 0) {
      setTimeout(() => {
        setLoading(true);
      }, 5000);
    }
  }, [theme]);

  useEffect(() => {
    let resetLoc = setInterval(() => {
      setLoc({
        top: getRandom(theme.windowWidth * 0.2, theme.windowWidth * 2),
        left: getRandom(0, theme.windowHeight),
      });
      setAppear(true);
      setTimeout(() => {
        setAppear(false);
      }, 4500);
    }, 5000);
    return () => clearInterval(resetLoc);
  }, []);

  return (
    loading
    && (
    <S.Container>
      <SmallStarDuo top={600} left={30} />
      {new Array(50).fill(0).map((e, i) => (
        <SmallParticleQuatro
          key={i}
          top={loc.top + theme.windowHeight * (0.004 * i + getRandom(-0.03, 0.03))}
          left={loc.left + theme.windowHeight * (0.004 * i + getRandom(-0.03, 0.03))}
          size={getRandom(0.05, 0.4)}
          appear={appear}
          delay={0.02 * i}
        />
      ))}
      {/* {new Array(15).fill(0).map((e, i) => (
        <SmallParticleDuo
          key={i}
          top={getRandom(theme.windowHeight * 0.2, theme.windowHeight * 0.4)}
          left={getRandom(0, theme.windowWidth * 0.1)}
          size={getRandom(0.05, 0.4)}
          appear
          delay={0.}
        />
      ))} */}

      <LargeStarQuatro top={theme.windowHeight * 1.3} left={theme.windowWidth * 0.15} size={1} />
      {/* <LargeStarMultiple top={theme.windowHeight * 0.65} left={theme.windowWidth - 30} spikes={8} size={1.3} /> */}
    </S.Container>
    )
  );
}

export default withTheme(Stars);
