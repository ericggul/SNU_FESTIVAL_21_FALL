import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { CONVERTED_MAJORS } from '@C/activity/mini/handwriting/data.js';
import { withTheme } from 'styled-components';
import { MapInteractionCSS } from 'react-map-interaction';
import DummyOne from '@I/activity/handwriting/question/dummy1.png';
import DummyTwo from '@I/activity/handwriting/question/dummy2.png';
import DummyThree from '@I/activity/handwriting/question/dummy3.png';

import * as S from './styles';

function Carousel({
  theme, width, sectorNum, indexes, emitCurrentIndex,
}) {
  const [currentLoc, setCurrentLoc] = useState(0);
  const [animateDir, setAnimateDir] = useState(0);
  const length = useMemo(() => indexes.length, [indexes]);

  useEffect(() => {
    emitCurrentIndex(indexes[currentLoc]);
  }, [currentLoc, emitCurrentIndex]);

  const handleClick = useCallback((direction) => {
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
            <MapInteractionCSS>
              <S.Image src={`https://snufestival-e9a04.web.app/images/handwriting/writings/${sectorNum}${parseInt(i.toString(16), 16)}.png`} />
            </MapInteractionCSS>
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
