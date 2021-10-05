import React, { useState, useMemo, useCallback } from 'react';
import MapImage from '@I/activity/place/Map.png';
import DefaultPointer from '@I/activity/place/DefaultPointer.png';
import DiscoveredPointer from '@I/activity/place/DiscoveredPointer.png';
import { MapInteractionCSS } from 'react-map-interaction';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import * as S from './styles';

function Map({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 1000, [theme.windowWidth]);
  const convert = useCallback((value) => {
    const result = isMobile ? (theme.windowWidth / 375) * value : (1000 / 375) * value;
    return result;
  }, []);

  const data = [
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
      {/* <MapInteractionCSS> */}
      <S.Map src={MapImage} top={convert(243)} />
      {data.map((data, i) => (
        <S.Pointer
          key={i}
          src={DefaultPointer}
          left={convert(data.x - 6)}
          top={convert(data.y - 7)}
          width={convert(30)}
        />
      ))}
      {/* </MapInteractionCSS> */}
    </S.MapContainer>
  );
}
export default withTheme(Map);

Map.propTypes = {

};
