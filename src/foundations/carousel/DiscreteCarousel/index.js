import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { MapInteractionCSS } from 'react-map-interaction';
import DummyOne from '@I/activity/handwriting/question/dummy1.png';
import DummyTwo from '@I/activity/handwriting/question/dummy2.png';
import DummyThree from '@I/activity/handwriting/question/dummy3.png';

import * as S from './styles';

function Carousel({
  theme, width, images, initialIndex, emitCurrentIndex,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [animateDir, setAnimateDir] = useState(0);
  const length = useMemo(() => images.length, [images]);

  useEffect(() => {
    emitCurrentIndex(currentIndex);
  }, [currentIndex, emitCurrentIndex]);

  const handleClick = useCallback((direction) => {
    if (direction === 1) {
      setCurrentIndex(i => (i + 1) % length);
      setAnimateDir(1);
    } else {
      setCurrentIndex(i => (i === 0 ? length - 1 : (i - 1) % length));
      setAnimateDir(-1);
    }
  }, [currentIndex, images]);

  console.log(animateDir);

  return (
    <S.Wrapper width={width}>
      <S.ArrowButton animate={animateDir === -1} onClick={() => handleClick(-1)}>{'<'}</S.ArrowButton>
      <S.StyledCarousel>
        {images.map((image, i) => (
          i === currentIndex && (
          <S.Box itemWidth={width * 0.7} key={i}>
            <MapInteractionCSS>
              <S.Image src={image} />
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
