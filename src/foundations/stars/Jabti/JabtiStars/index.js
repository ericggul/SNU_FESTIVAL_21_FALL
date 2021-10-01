import React, { useState, useEffect } from 'react';
import { withTheme } from 'styled-components';
import Moon from '@I/jabti/background/moon.png';
import {
  SmallStarDuo, SmallStarQuatro, LargeStarQuatro, LargeStarMultiple,
} from '@F/stars/StarComponents';
import * as S from './styles';

const getRandom = (a, b) => Math.random() * (b - a) + a;

function Stars({ theme, index }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (theme.windowWidth > 0 && theme.windowHeight > 0) {
      setLoading(true);
    }
  }, [theme]);

  return (
    loading
    && (

      theme.windowWidth < 768
        ? (
          <S.Container>
            <SmallStarDuo top={600} left={200} />
            <SmallStarQuatro top={theme.windowHeight * 0.18} left={theme.windowWidth * 0.6} size={0.4} />
            <SmallStarQuatro top={theme.windowHeight * 0.2} left={theme.windowWidth / 2 - 10} size={0.6} />
            <SmallStarQuatro top={theme.windowHeight * 0.7} left={theme.windowWidth * 0.12} size={0.7} />
            <SmallStarQuatro top={theme.windowHeight * 0.1} left={theme.windowWidth * 0.8} size={1.5} />

            <SmallStarQuatro top={theme.windowHeight * 0.28} left={theme.windowWidth * 0.09} />

            {index > 1 && <LargeStarQuatro top={theme.windowHeight * 0.37} left={theme.windowWidth * 0.11} size={0.8} />}
            {index > 2 && <LargeStarQuatro top={theme.windowHeight * 0.2} left={theme.windowWidth * 0.6} size={0.7} />}
            {index > 3 && <LargeStarQuatro top={theme.windowHeight * 0.73} left={theme.windowWidth * 0.44} size={0.9} />}

            {/* <LargeStarMultiple top={theme.windowHeight * 0.65} left={theme.windowWidth - 30} spikes={8} size={1.3} /> */}
            <S.ImageMoon top={theme.windowHeight * 0.5} left={theme.windowWidth * 0.5} size={theme.windowHeight * 0.4} src={Moon} />
          </S.Container>
        )
        : (
          <S.Container>
            <SmallStarDuo top={600} left={200} />
            <SmallStarQuatro top={theme.windowHeight * 0.18} left={theme.windowWidth * 0.6} size={0.4} />
            <SmallStarQuatro top={theme.windowHeight * 0.2} left={theme.windowWidth / 2 - 10} size={0.6} />
            <SmallStarQuatro top={theme.windowHeight * 0.7} left={theme.windowWidth * 0.12} size={0.7} />
            <SmallStarQuatro top={theme.windowHeight * 0.1} left={theme.windowWidth * 0.8} size={1.5} />

            <SmallStarQuatro top={theme.windowHeight * 0.28} left={theme.windowWidth * 0.09} />

            {index > 1 && <LargeStarQuatro top={theme.windowHeight * 0.40} left={theme.windowWidth * 0.31} size={1} />}
            {index > 2 && <LargeStarQuatro top={theme.windowHeight * 0.10} left={theme.windowWidth * 0.6} size={0.9} />}
            {index > 3 && <LargeStarQuatro top={theme.windowHeight * 0.85} left={theme.windowWidth * 0.39} size={1.3} />}

            {/* <LargeStarMultiple top={theme.windowHeight * 0.65} left={theme.windowWidth - 30} spikes={8} size={1.3} /> */}
            <S.ImageMoon top={theme.windowHeight * 0.5} left={theme.windowWidth * 0.5} size={theme.windowHeight * 0.6} src={Moon} />
          </S.Container>
        )
    )
  );
}

export default withTheme(Stars);
