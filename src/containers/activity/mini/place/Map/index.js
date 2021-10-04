import React, { useState, useMemo, useCallback } from 'react';
import MapImage from '@I/activity/place/Map.png';
import { MapInteractionCSS } from 'react-map-interaction';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import * as S from './styles';

function Map({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const convert = useCallback((value) => {
    const result = isMobile ? (theme.windowWidth / 375) * value : (768 / 375) * value;
    return result;
  }, []);

  return (
    <S.MapContainer width={convert(375)} height={convert(375)}>
      <MapInteractionCSS>
        <S.Map src={MapImage} />
      </MapInteractionCSS>
    </S.MapContainer>
  );
}
export default withTheme(Map);

Map.propTypes = {

};
