import React, { useState, useMemo, useCallback } from 'react';
import MapImage from '@I/activity/place/Map.png';
import DefaultPointer from '@I/activity/place/DefaultPointer.png';
import DiscoveredPointer from '@I/activity/place/DiscoveredPointer.png';
import NeurtralRio from '@I/activity/place/NeutralRio.png';

import { MapInteractionCSS } from 'react-map-interaction';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import * as S from './styles';

function Map({ theme, solvedArray, handleClick }) {
  const getRandom = useCallback((a, b) => Math.random() * (b - a) + a, []);
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const convert = useCallback((value) => {
    const result = isMobile ? (theme.windowWidth / 375) * value : (768 / 375) * value;
    return result;
  }, []);

  const POS_DATA = [
    { x: 116.3, y: 400 },
    { x: 182.7, y: 366.3 }, // 1
    { x: 143.3, y: 338.3 }, // 2
    { x: 188, y: 324.3 }, // 3
    { x: 228, y: 350 }, // 4
    { x: 116.3, y: 371 }, // 5
    { x: 147.3, y: 372 }, // 6
    { x: 60.3, y: 461 },
    { x: 176.3, y: 400 },

  ];

  return (
    <S.MapContainer width={convert(375)} height={convert(375)}>
      <S.Map src={MapImage} left={0} top={0} width={convert(375)} height={convert(375)} />
      {solvedArray.map((solved, i) => (
        <S.PointerWrapper delay={0.9 + i * 0.02}>
          <S.Pointer
            key={i}
            src={solved === 0 ? DefaultPointer : DiscoveredPointer}
            animate={solved === 0}
            left={solved !== 0 ? convert(POS_DATA[i].x - 6) : convert(POS_DATA[i].x - 6 + getRandom(-40, 40))}
            top={solved !== 0 ? convert(POS_DATA[i].y - 250) : convert(POS_DATA[i].y - 250 + getRandom(-20, 20))}
            width={convert(30)}
            onClick={() => handleClick(i)}
          />
        </S.PointerWrapper>

      ))}

      <S.Image src={NeurtralRio} top={convert(185)} width={convert(136)} height={convert(136)} />
    </S.MapContainer>
  );
}
export default withTheme(Map);

Map.propTypes = {
  solvedArray: PropTypes.arrayOf(PropTypes.number).isRequired,
};
