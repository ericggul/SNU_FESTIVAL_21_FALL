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
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const convert = useCallback((value) => {
    const result = isMobile ? (theme.windowWidth / 375) * value : (768 / 375) * value;
    return result;
  }, []);

  const POS_DATA = [
    { x: 60.3, y: 461 },
    { x: 116.3, y: 400 },
    { x: 116.3, y: 371 },
    { x: 143.3, y: 338.3 },
    { x: 182.7, y: 366.3 },
    { x: 176.3, y: 400 },
    { x: 147.3, y: 372 },
    { x: 188, y: 324.3 },
    { x: 228, y: 350 },
  ];

  return (
    <S.MapContainer width={convert(375)} height={convert(375)}>
      <S.Map src={MapImage} />
      {solvedArray.map((solved, i) => (
        <S.Pointer
          key={i}
          src={solved === 0 ? DefaultPointer : DiscoveredPointer}
          animate={solved === 0}
          left={convert(POS_DATA[i].x - 6)}
          top={convert(POS_DATA[i].y - 250)}
          width={convert(30)}
          onClick={() => handleClick(i)}
        />
      ))}

      <S.Image src={NeurtralRio} top={convert(185)} width={convert(136)} height={convert(136)} />
    </S.MapContainer>
  );
}
export default withTheme(Map);

Map.propTypes = {
  solvedArray: PropTypes.arrayOf(PropTypes.number).isRequired,
};
