import React, {
  useState, useCallback, useEffect, useRef, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { CLOTHING_DATA } from '@C/clothing/data';

import * as S from './styles';

function Visualizer({
  theme, imageArray, sl, pr, changeSl,
}) {
  const [current, setCurrent] = useState(sl);
  const thisImageArray = imageArray[pr];
  const [expanded, setExpanded] = useState(false);
  const [arrangedArray, setArrangedArray] = useState(thisImageArray);

  const SINGLE_COLUMN_NUMBER = 7;
  const ALL_COLUMNS_SIZE = useMemo(() => (theme.windowWidth < 768 ? theme.windowWidth : 768), [theme]);
  const SINGLE_COLUMN_SIZE = useMemo(() => ALL_COLUMNS_SIZE / SINGLE_COLUMN_NUMBER, [theme]);

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
      const indicator = SINGLE_COLUMN_SIZE;
      narrowRef.current.scrollTo({
        top: 0,
        left: (current - 3) * indicator,
      });
    }
  }, [current, narrowRef, expanded, sl, pr]);

  const Expanded = () => (
    <S.ExpandedGrid width={SINGLE_COLUMN_SIZE}>
      {thisImageArray.map((img, imgIdx) => (
        <S.ImageContainer key={imgIdx} selected={imgIdx === current}>
          <S.ImageBubble
            src={img}
            onClick={() => handleClick(imgIdx)}
            width={SINGLE_COLUMN_SIZE}
          />
        </S.ImageContainer>
      ))}
    </S.ExpandedGrid>
  );

  const Narrowed = () => (
    <S.NarrowFlex
      elements={SINGLE_COLUMN_NUMBER}
      width={ALL_COLUMNS_SIZE}
      ref={narrowRef}
      // translateX={theme.windowWidth < 768 ? theme.windowWidth * 0.2 * (current - 1) : 768 * 0.2 * (current - 1)}
    >
      {thisImageArray.map((img, imgIdx) => (
        <S.ImageContainer key={imgIdx} selected={imgIdx === current}>
          <S.ImageBubble
            src={img}
            onClick={() => handleClick(imgIdx)}
            width={SINGLE_COLUMN_SIZE}
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
        </p>
        <p>
          {expanded ? '접기' : '모두보기'}
        </p>
      </S.Expander>

    </S.Visualizer>
  );
}
export default withTheme(Visualizer);

Visualizer.propTypes = {

};
