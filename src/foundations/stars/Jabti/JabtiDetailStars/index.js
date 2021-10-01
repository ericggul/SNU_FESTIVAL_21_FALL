import React, { useState, useEffect } from 'react';
import { withTheme } from 'styled-components';
import Moon from '@I/jabti/background/moon.png';
import * as S from './styles';

const getRandom = (a, b) => Math.random() * (b - a) + a;

function Stars({ color, theme }) {
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
            <SmallStarDuo color={color} top={600} left={200} />
            <SmallStarQuatro color={color} top={theme.windowHeight * 0.18} left={theme.windowWidth * 0.6} size={0.4} />
            <SmallStarQuatro color={color} top={theme.windowHeight * 0.2} left={theme.windowWidth / 2 - 10} size={0.6} />
            <SmallStarQuatro color={color} top={theme.windowHeight * 0.7} left={theme.windowWidth * 0.12} size={0.7} />
            <SmallStarQuatro color={color} top={theme.windowHeight * 0.1} left={theme.windowWidth * 0.8} size={1.5} />

            <SmallStarQuatro color={color} top={theme.windowHeight * 0.28} left={theme.windowWidth * 0.09} />
            {/*
            {index > 1 && <LargeStarQuatro color={color} top={theme.windowHeight * 0.37} left={theme.windowWidth * 0.11} size={0.8} />}
            {index > 2 && <LargeStarQuatro color={color} top={theme.windowHeight * 0.2} left={theme.windowWidth * 0.6} size={0.7} />}
            {index > 3 && <LargeStarQuatro color={color} top={theme.windowHeight * 0.73} left={theme.windowWidth * 0.44} size={0.9} />} */}

          </S.Container>
        )
        : (
          <S.Container>
            <SmallStarDuo color={color} top={600} left={200} />
            <SmallStarQuatro color={color} top={theme.windowHeight * 0.18} left={theme.windowWidth * 0.14} size={0.4} />
            <SmallStarQuatro color={color} top={theme.windowHeight * 0.2} left={theme.windowWidth * 0.75} size={0.6} />
            <SmallStarQuatro color={color} top={theme.windowHeight * 0.7} left={theme.windowWidth * 0.12} size={0.7} />
            <SmallStarQuatro color={color} top={theme.windowHeight * 0.1} left={theme.windowWidth * 0.78} size={1.5} />

            <SmallStarQuatro color={color} top={theme.windowHeight * 0.78} left={theme.windowWidth * 0.78} size={1.5} />
            <SmallStarQuatro color={color} top={theme.windowHeight * 0.28} left={theme.windowWidth * 0.09} />
            {/*
            {index > 1 && <LargeStarQuatro color={color} top={theme.windowHeight * 0.40} left={theme.windowWidth * 0.31} size={1} />}
            {index > 2 && <LargeStarQuatro color={color} top={theme.windowHeight * 0.10} left={theme.windowWidth * 0.6} size={0.9} />}
            {index > 3 && <LargeStarQuatro color={color} top={theme.windowHeight * 0.85} left={theme.windowWidth * 0.39} size={1.3} />} */}

          </S.Container>
        )
    )
  );
}

export default withTheme(Stars);

const SmallStarDuo = ({
  color, top, left, size = 1,
}) => {
  const [tilted, setTilted] = useState(getRandom(-4, 4));
  const [relativeHorizontalLength, setRelativeHorizontalLength] = useState(getRandom(0.7, 1.3));
  return (
    <S.StarContainer time={6} delay={0}>
      <S.SmallLineDivided width={size} height={30 * size} top={top} left={left} angle={tilted} color={color} />
      <S.SmallLineDivided width={size * relativeHorizontalLength} height={30 * size * relativeHorizontalLength} top={top} left={left} angle={tilted + 90} color={color} />
    </S.StarContainer>
  );
};

const SmallStarQuatro = ({
  color, top, left, size = 1,
}) => {
  const [tilted, setTilted] = useState(getRandom(-4, 4));
  const [subAxisAngle, setSubAxisAngle] = useState(getRandom(38, 52));
  const [subAxisLength, setSubAxisLength] = useState(getRandom(0.3, 0.7));

  const [animationTime, setAnimationTime] = useState(getRandom(3, 10));
  const [animationDelay, setAnimationDelay] = useState(getRandom(0, 5));
  return (
    <S.StarContainer time={animationTime} delay={animationDelay}>
      <S.SmallLine width={0.8 * size} height={30 * size * subAxisLength} top={top} left={left} angle={tilted + subAxisAngle} color={color} />
      <S.SmallLine width={size} height={30 * size} top={top} left={left} angle={tilted} color={color} />
      <S.SmallLine width={size} height={30 * size} top={top} left={left} angle={tilted + 90} color={color} />
      <S.SmallLine width={0.8 * size} height={30 * size * subAxisLength} top={top} left={left} angle={tilted + 180 - subAxisAngle} color={color} />
    </S.StarContainer>
  );
};

const LargeStarQuatro = ({
  color, top, left, size = 1,
}) => {
  const [tilted, setTilted] = useState(getRandom(-2, 2));
  const [subAxisAngle, setSubAxisAngle] = useState(getRandom(40, 50));
  const [subAxisLength, setSubAxisLength] = useState(getRandom(0.3, 0.7));
  const [animationTime, setAnimationTime] = useState(getRandom(3, 5));

  return (
    <S.StarContainer time={animationTime} delay={0}>
      <S.DivLine width={3 * size} height={100 * size * subAxisLength} top={top} left={left} angle={tilted + subAxisAngle} />
      <S.DivLine width={4 * size} height={100 * size} top={top} left={left} angle={tilted} />
      <S.DivLine width={4 * size} height={100 * size} top={top} left={left} angle={tilted + 90} />
      <S.DivLine width={3 * size} height={100 * size * subAxisLength} top={top} left={left} angle={tilted + 180 - subAxisAngle} />
    </S.StarContainer>
  );
};

const LargeStarMultiple = ({
  color, top, left, size = 1, spikes,
}) => {
  const [tilted, setTilted] = useState(getRandom(-2, 2));

  return (
    <>
      {
        new Array(spikes).fill(0).map((e, i) => (
          <S.DivLine key={i} width={2 * size} height={i === 0 || i === spikes / 2 ? 80 * size : i % (spikes / 4) === 0 ? 60 * size : 40 * size} top={top} left={left} angle={tilted + i * 180 / spikes} />
        ))
      }
    </>
  );
};
