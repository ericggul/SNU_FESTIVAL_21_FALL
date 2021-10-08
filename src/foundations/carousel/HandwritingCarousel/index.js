import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { MapInteractionCSS } from 'react-map-interaction';

import * as S from './styles';

function Carousel({
  width, sectorNum, indexes, shouldChangeLoc, emitCurrentIndex,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentLoc, setCurrentLoc] = useState(0);
  const [animateDir, setAnimateDir] = useState(0);
  const length = useMemo(() => indexes.length, [indexes]);

  useEffect(() => {
    console.log('index change detected');
    setCurrentLoc(0);
  }, [indexes]);

  useEffect(() => {
    emitCurrentIndex(currentLoc);
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

  return (
    <S.Wrapper width={width}>
      <S.ArrowButton animate={animateDir === -1} onClick={() => handleClick(-1)}>{'<'}</S.ArrowButton>
      <S.StyledCarousel>
        {indexes.map((index, i) => (
          index === indexes[currentLoc] && (
          <S.Box itemWidth={width * 0.7} key={i}>
            {isLoading && <S.Skeleton>LOADING...</S.Skeleton>}
            <MapInteractionCSS>

              <S.Image
                isLoading={isLoading}
                onLoad={() => setIsLoading(false)}
                src={`https://snufestival-e9a04.web.app/images/handwriting/writings/${sectorNum}${index.toString(16)}.png`}
              />

            </MapInteractionCSS>
          </S.Box>
          )
        ))}
      </S.StyledCarousel>
      <S.ArrowButton animate={animateDir === 1} onClick={() => handleClick(1)}>{'>'}</S.ArrowButton>
    </S.Wrapper>
  );
}
export default Carousel;

Carousel.propTypes = {
  emitCurrentIndex: PropTypes.func,
};

Carousel.defaultProps = {
  emitCurrentIndex: () => {},
};
