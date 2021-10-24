import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import * as S from './styles';

function Visualizer({
  theme, CLOTHING_DATA, imageArray, sl, pr, changeSl,
}) {
  const [current, setCurrent] = useState(sl);
  const thisImageArray = imageArray[pr];
  const [expanded, setExpanded] = useState(false);
  const [arrangedArray, setArrangedArray] = useState(thisImageArray);

  const narrowRef = useRef();

  const handleClick = useCallback((imgIdx) => {
    setCurrent(imgIdx);
    changeSl(imgIdx, pr);
  }, [imageArray, sl, pr]);

  useEffect(() => {
    setCurrent(sl);
  }, [pr]);

  useEffect(() => {
    if (narrowRef && narrowRef.current) {
      narrowRef.current.scrollTo({
        top: 0,
        left: (current - 2) * theme.windowWidth * 0.2,
      });
    }
  }, [current, narrowRef, expanded]);

  const Expanded = () => (
    <S.ExpandedGrid width={theme.windowWidth < 768 ? theme.windowWidth * 0.2 : 768 * 0.2}>
      {thisImageArray.map((img, imgIdx) => (
        <S.ImageContainer key={imgIdx} selected={imgIdx === current}>
          <S.ImageBubble
            src={img}
            onClick={() => handleClick(imgIdx)}
            width={theme.windowWidth < 768 ? theme.windowWidth * 0.2 : 768 * 0.2}
          />
        </S.ImageContainer>
      ))}
    </S.ExpandedGrid>
  );

  const Narrowed = () => (
    <S.NarrowFlex
      width={theme.windowWidth < 768 ? theme.windowWidth : 768}
      ref={narrowRef}
      // translateX={theme.windowWidth < 768 ? theme.windowWidth * 0.2 * (current - 1) : 768 * 0.2 * (current - 1)}
    >
      {thisImageArray.map((img, imgIdx) => (
        <S.ImageContainer key={imgIdx} selected={imgIdx === current}>
          <S.ImageBubble
            src={img}
            onClick={() => handleClick(imgIdx)}
            width={theme.windowWidth < 768 ? theme.windowWidth * 0.2 : 768 * 0.2}
          />
        </S.ImageContainer>
      ))}
    </S.NarrowFlex>
  );

  return (
    <S.Visualizer>

      {expanded ? <Expanded /> : <Narrowed />}
      <S.Expander expanded={expanded} onClick={() => setExpanded(exp => !exp)}>
        <p>
          {CLOTHING_DATA[pr].hangeul}
          {' '}
          더보기
        </p>
      </S.Expander>

    </S.Visualizer>
  );
}
export default withTheme(Visualizer);

Visualizer.propTypes = {

};
