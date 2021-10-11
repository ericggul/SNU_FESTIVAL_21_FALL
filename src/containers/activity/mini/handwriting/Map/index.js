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

export const transition = { duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] };

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
    <S.MapContainer
      width={convert(375)}
      height={convert(1048)}
    >
      <S.Image src={RoadImage} />

      <S.Object src={Object1} left={convert(276)} top={convert(338)} width={convert(33)} jump={getRandom(5, 10)} />
      <S.Object src={Object1} left={convert(265)} top={convert(348)} width={convert(33)} jump={getRandom(5, 10)} />
      <S.Object src={Object1} left={convert(294)} top={convert(344)} width={convert(28)} jump={getRandom(5, 10)} />
      <S.Object src={Object1} left={convert(305)} top={convert(352)} width={convert(33)} jump={getRandom(5, 10)} />

      <S.Object src={Object1} left={convert(180)} top={convert(490)} width={convert(33)} jump={getRandom(5, 10)} />
      <S.Object src={Object1} left={convert(155)} top={convert(493)} width={convert(45)} jump={getRandom(5, 10)} />
      <S.Object src={Object1} left={convert(198)} top={convert(495)} width={convert(40)} jump={getRandom(5, 10)} />

      <S.Object src={Object5} left={convert(5)} top={convert(380)} width={convert(61)} jump={getRandom(5, 10)} />
      <S.Object src={Object5} left={convert(20)} top={convert(385)} width={convert(61)} jump={getRandom(5, 10)} />
      <S.Object src={Object4} left={convert(50)} top={convert(420)} width={convert(53)} jump={getRandom(5, 10)} />

      <S.Object src={Object2} left={convert(115)} top={convert(578)} width={convert(51)} jump={getRandom(5, 10)} />
      <S.Object src={Object2} left={convert(90)} top={convert(567)} width={convert(51)} jump={getRandom(5, 10)} />
      <S.Object src={Object2} left={convert(98)} top={convert(585)} width={convert(51)} jump={getRandom(5, 10)} />

      <S.Object src={Object2} left={convert(323)} top={convert(783)} width={convert(51)} jump={getRandom(5, 10)} />
      <S.Object src={Object4} left={convert(134.8)} top={convert(275.7)} width={convert(53)} jump={getRandom(5, 10)} />
      <S.Object src={Object4} left={convert(104)} top={convert(270)} width={convert(53)} jump={getRandom(5, 10)} />
      <S.Object src={Object5} left={convert(24)} top={convert(659)} width={convert(61)} jump={getRandom(5, 10)} />

      <S.Object src={Object5} left={convert(2)} top={convert(802)} width={convert(61)} jump={getRandom(5, 10)} />

      <S.Object src={Object5} left={convert(2.5)} top={convert(490)} width={convert(61)} jump={getRandom(5, 10)} />

      <S.Object src={Object1} left={convert(183)} top={convert(658)} width={convert(30)} jump={getRandom(5, 10)} />
      <S.Object src={Object1} left={convert(168)} top={convert(660)} width={convert(30)} jump={getRandom(5, 10)} />
      <S.Object src={Object1} left={convert(195)} top={convert(663)} width={convert(32)} jump={getRandom(5, 10)} />
      <S.Object src={Object4} left={convert(165)} top={convert(670)} width={convert(53)} jump={getRandom(5, 10)} />

      <S.Object src={Object1} left={convert(173)} top={convert(738)} width={convert(30)} jump={getRandom(5, 10)} />
      <S.Object src={Object1} left={convert(163)} top={convert(752)} width={convert(30)} jump={getRandom(5, 10)} />
      <S.Object src={Object1} left={convert(153)} top={convert(762)} width={convert(30)} jump={getRandom(5, 10)} />
      <S.Object src={Object1} left={convert(143)} top={convert(768)} width={convert(30)} jump={getRandom(5, 10)} />

      <S.Object src={Object5} left={convert(145)} top={convert(899)} width={convert(61)} jump={getRandom(5, 10)} />
      <S.Object src={Object5} left={convert(276)} top={convert(610)} width={convert(60)} jump={getRandom(5, 10)} />
      <S.Object src={Object5} left={convert(292)} top={convert(616)} width={convert(60)} jump={getRandom(5, 10)} />
      {currentSolved.map((e, i) => (
        <S.Building
          key={i}
          src={`https://snufestival-e9a04.web.app/images/handwriting/buildings/${CORRESPONDENCE[i][0] + 1}-${e}.png`}
          left={convert(POS_DATA[CORRESPONDENCE[i][0]].x)}
          top={convert(POS_DATA[CORRESPONDENCE[i][0]].y)}
          width={convert(150)}
          onClick={() => handleClick(i)}
          jump={i * 0.2}
        />
      ))}
      <S.Object src={Object3} left={convert(256)} top={convert(928)} width={convert(60)} />
    </S.MapContainer>
  );
}
export default withTheme(Map);

Map.propTypes = {

};