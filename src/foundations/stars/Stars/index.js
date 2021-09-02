import React, { useState, useEffect } from 'react';
import { withTheme } from 'styled-components';
import * as S from './styles';

const getRandom = (a, b) => Math.random() * (b - a) + a;

function Stars({ theme }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (theme.windowWidth > 0 && theme.windowHeight > 0) {
      setLoading(true);
    }
  }, [theme]);

  console.log(theme.windowWidth, theme.windowHeight);
  return (
    loading
    && (
    <S.Container>
      <SmallStarDuo top={600} left={200} />
      {/* {
        smallQuatroPos.length > 0 && smallQuatroPos.map((e, i) => (
          <SmallStarQuatro
            top={smallQuatroPos.top}
            left={smallQuatroPos.left}
            size={smallQuatroPos.size}
            key={i}
          />
        ))
      } */}
      <LargeStarQuatro top={100} left={100} />
      <LargeStarMultiple top={theme.windowHeight - 100} left={theme.windowWidth - 90} spikes={8} size={1.2} />
    </S.Container>
    )
  );
}

export default withTheme(Stars);

const SmallStarDuo = ({ top, left, size = 1 }) => {
  const [tilted, setTilted] = useState(getRandom(-4, 4));
  const [color, setColor] = useState(`rgb(255, ${getRandom(240, 252)}, ${getRandom(150, 200)})`);
  const [relativeHorizontalLength, setRelativeHorizontalLength] = useState(getRandom(0.7, 1.3));
  return (
    <>
      <S.SmallLineDivided width={size} height={30 * size} top={top} left={left} angle={tilted} color={color} />
      <S.SmallLineDivided width={size * relativeHorizontalLength} height={30 * size * relativeHorizontalLength} top={top} left={left} angle={tilted + 90} color={color} />

    </>
  );
};

const SmallStarQuatro = ({ top, left, size = 1 }) => {
  const [tilted, setTilted] = useState(getRandom(-4, 4));
  const [subAxisAngle, setSubAxisAngle] = useState(getRandom(38, 52));
  const [subAxisLength, setSubAxisLength] = useState(getRandom(0.3, 0.7));
  const [color, setColor] = useState(`rgb(255, ${getRandom(240, 252)}, ${getRandom(150, 200)})`);

  const [animationTime, setAnimationTime] = useState(getRandom(3, 8));
  const [animationDelay, setAnimationDelay] = useState(getRandom(0, 10));
  return (
    <S.StarContainer time={animationTime} delay={animationDelay}>
      <S.SmallLine width={0.8 * size} height={30 * size * subAxisLength} top={top} left={left} angle={tilted + subAxisAngle} color={color} />
      <S.SmallLine width={size} height={30 * size} top={top} left={left} angle={tilted} color={color} />
      <S.SmallLine width={size} height={30 * size} top={top} left={left} angle={tilted + 90} color={color} />
      <S.SmallLine width={0.8 * size} height={30 * size * subAxisLength} top={top} left={left} angle={tilted + 180 - subAxisAngle} color={color} />
    </S.StarContainer>
  );
};

const LargeStarQuatro = ({ top, left, size = 1 }) => {
  const [tilted, setTilted] = useState(getRandom(-2, 2));
  const [subAxisAngle, setSubAxisAngle] = useState(getRandom(40, 50));
  const [subAxisLength, setSubAxisLength] = useState(getRandom(0, 0.7));
  return (
    <>
      <S.DivLine width={3 * size} height={100 * size * subAxisLength} top={top} left={left} angle={tilted + subAxisAngle} />
      <S.DivLine width={4 * size} height={100 * size} top={top} left={left} angle={tilted} />
      <S.DivLine width={4 * size} height={100 * size} top={top} left={left} angle={tilted + 90} />
      <S.DivLine width={3 * size} height={100 * size * subAxisLength} top={top} left={left} angle={tilted + 180 - subAxisAngle} />
    </>
  );
};

const LargeStarMultiple = ({
  top, left, size = 1, spikes,
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
