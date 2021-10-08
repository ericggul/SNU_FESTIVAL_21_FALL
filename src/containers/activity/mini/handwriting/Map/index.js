import React, {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import RoadImage from '@I/activity/handwriting/road.png';
import Object1 from '@I/activity/handwriting/object1.png';
import Object2 from '@I/activity/handwriting/object2.png';
import Object3 from '@I/activity/handwriting/object3.png';
import Object4 from '@I/activity/handwriting/object4.png';
import Object5 from '@I/activity/handwriting/object5.png';

import * as S from './styles';

function Map({ theme, handleClick, solvedRates }) {
  const getRandom = (a, b) => Math.random() * (b - a) + a;
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  const rateToLevelConverter = useCallback((rates) => {
    let result = [];
    for (let i = 0; i < solvedRates.length; i += 1) {
      result[i] = Math.floor(rates[i] * 4);
    }
    return result;
  }, []);
  const [currentSolved, setCurrentSolved] = useState(rateToLevelConverter(solvedRates));
  useEffect(() => {
    setCurrentSolved(rateToLevelConverter(solvedRates));
  }, [solvedRates]);
  console.log('currentSolved', currentSolved);

  const convert = useCallback((value) => {
    const result = isMobile ? (theme.windowWidth / 375) * value : (768 / 375) * value;
    return result;
  }, []);

  const POS_DATA = [
    { x: 37.5, y: 630.4 },
    { x: 165.5, y: 543.5 },
    { x: 205.5, y: 371.7 },
    { x: 37, y: 151 },
    { x: 15.5, y: 792.3 },
    { x: 15.5, y: 466.6 },
    { x: 187.5, y: 195.6 },
    { x: 152.5, y: 853.8 },
    { x: 215.5, y: 700.8 },
    { x: 42.5, y: 326 },
  ];

  const CORRESPONDENCE = [
    [2, 0],
    [0, 1],
    [5, 2],
    [6, 3],
    [8, 4],
    [4, 5],
    [7, 6],
    [9, 7],
    [3, 8],
    [1, 9],
  ];

  return (
    <S.MapContainer width={convert(375)} height={convert(1048)}>
      <S.Image src={RoadImage} />
      <S.Object src={Object1} left={convert(153)} top={convert(498)} width={convert(45)} jump={getRandom(3, 10)} />
      <S.Object src={Object1} left={convert(276)} top={convert(338)} width={convert(33)} jump={getRandom(3, 10)} />
      <S.Object src={Object1} left={convert(265)} top={convert(348)} width={convert(33)} jump={getRandom(3, 10)} />
      <S.Object src={Object1} left={convert(294)} top={convert(344)} width={convert(28)} jump={getRandom(3, 10)} />
      <S.Object src={Object1} left={convert(305)} top={convert(352)} width={convert(33)} jump={getRandom(3, 10)} />

      <S.Object src={Object2} left={convert(96)} top={convert(547)} width={convert(51)} jump={getRandom(3, 10)} />
      <S.Object src={Object2} left={convert(323)} top={convert(783)} width={convert(51)} jump={getRandom(3, 10)} />
      <S.Object src={Object4} left={convert(134.8)} top={convert(275.7)} width={convert(53)} jump={getRandom(3, 10)} />
      <S.Object src={Object5} left={convert(24)} top={convert(659)} width={convert(61)} jump={getRandom(3, 10)} />
      <S.Object src={Object5} left={convert(145)} top={convert(899)} width={convert(61)} jump={getRandom(3, 10)} />
      <S.Object src={Object5} left={convert(276)} top={convert(610)} width={convert(60)} jump={getRandom(3, 10)} />
      <S.Object src={Object5} left={convert(292)} top={convert(616)} width={convert(60)} jump={getRandom(3, 10)} />
      {currentSolved.map((e, i) => (
        <S.Building
          key={i}
          src={`https://snufestival-e9a04.web.app/images/handwriting/buildings/${CORRESPONDENCE[i][0] + 1}-${e}.png`}
          left={convert(POS_DATA[CORRESPONDENCE[i][0]].x)}
          top={convert(POS_DATA[CORRESPONDENCE[i][0]].y)}
          width={convert(150)}
          onClick={() => handleClick(i)}
        />
      ))}
      <S.Object src={Object3} left={convert(256)} top={convert(928)} width={convert(60)} />
    </S.MapContainer>
  );
}
export default withTheme(Map);

Map.propTypes = {

};
