import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { CONVERTED_MAJORS } from '@C/activity/mini/handwriting/data.js';
import Skeleton from '@I/skeleton/skeleton.png';
import { withTheme } from 'styled-components';
import { MapInteractionCSS } from 'react-map-interaction';

import * as S from './styles';

function Carousel({
  theme, width, sectorNum, indexes, emitCurrentIndex,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentLoc, setCurrentLoc] = useState(0);
  const [animateDir, setAnimateDir] = useState(0);
  const [date, setDate] = useState(4);
  const length = useMemo(() => indexes.length, [indexes]);

  useEffect(() => {
    emitCurrentIndex(indexes[currentLoc]);
  }, [currentLoc, emitCurrentIndex]);

  const handleClick = useCallback((direction) => {
    setIsLoading(true);
    if (direction === 1) {
      setCurrentLoc(i => (i + 1) % length);
      setAnimateDir(1);
    } else {
      setCurrentLoc(i => (i === 0 ? length - 1 : (i - 1) % length));
      setAnimateDir(-1);
    }
  }, [currentLoc, length]);

  useEffect(() => {
    const today = new Date();
    if (today.getDate() === 26) {
      setDate(1);
    } else if (today.getDate() === 27) {
      setDate(2);
    } else if (today.getDate() === 28) {
      setDate(3);
    } else if (today.getDate() === 29) {
      setDate(4);
    }
  }, []);
  // console.log(i.toString(16));
  // console.log(parseInt(i.toString(16), 16));

  return (
    <S.Wrapper width={width}>
      <S.ArrowButton animate={animateDir === -1} onClick={() => handleClick(-1)}>{'<'}</S.ArrowButton>
      <S.StyledCarousel>
        {indexes.map((index, i) => (
          index === indexes[currentLoc] && (
          <S.Box itemWidth={width * 0.7} key={i}>
            {isLoading && <S.Skeleton>LOADING...</S.Skeleton>}
            {/* <MapInteractionCSS> */}

            <S.Image
              isLoading={isLoading}
              onLoad={() => setIsLoading(false)}
              src={`https://snufestival-e9a04.web.app/images/places/${sectorNum}${date}${index}.jpg`}
            />

            {/* </MapInteractionCSS> */}
          </S.Box>
          )
        ))}
      </S.StyledCarousel>
      <S.ArrowButton animate={animateDir === 1} onClick={() => handleClick(1)}>{'>'}</S.ArrowButton>
    </S.Wrapper>
  );
}
export default withTheme(Carousel);

Carousel.propTypes = {
  emitCurrentIndex: PropTypes.func,
};

Carousel.defaultProps = {
  emitCurrentIndex: () => {},
};
