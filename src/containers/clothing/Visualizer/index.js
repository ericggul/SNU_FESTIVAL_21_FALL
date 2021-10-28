import React, {
  useState, useCallback, useEffect, useRef, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { CLOTHING_DATA } from '@C/clothing/data';

import * as S from './styles';

function Visualizer({
  theme, imageArray, sl, slAccessories, pr, changeSl, changeSlAccessories,
}) {
  const [current, setCurrent] = useState(pr === 8 ? [sl] : slAccessories);
  const thisImageArray = imageArray[pr];
  const [expanded, setExpanded] = useState(false);

  const SINGLE_COLUMN_NUMBER = 7;
  const ALL_COLUMNS_SIZE = useMemo(() => (theme.windowWidth < 768 ? theme.windowWidth : 768), [theme]);
  const SINGLE_COLUMN_SIZE = useMemo(() => ALL_COLUMNS_SIZE / SINGLE_COLUMN_NUMBER, [theme]);

  const narrowRef = useRef();

  const handleClick = useCallback((imgIdx) => {
    if (pr !== 8) {
      setCurrent([imgIdx]);
      changeSl(imgIdx, pr);
    } else if (pr === 8) {
      setCurrent(cur => {
        if (cur.includes(imgIdx)) {
          return cur.filter((val) => imgIdx !== val);
        }
        return [...cur, imgIdx];
      });
    }
  }, [imageArray, sl, pr]);

  useEffect(() => {
    if (pr !== 8) {
      setCurrent([sl]);
    } else {
      setCurrent(slAccessories);
    }
  }, [pr]);

  useEffect(() => {
    if (pr === 8) {
      changeSlAccessories(current);
    }
  }, [current, pr]);

  useEffect(() => {
    if (narrowRef && narrowRef.current) {
      const indicator = SINGLE_COLUMN_SIZE;
      narrowRef.current.scrollTo({
        top: 0,
        left: (current[0] - 3) * indicator,
      });
    }
  }, [current, narrowRef, expanded, sl, pr]);

  const Expanded = () => (
    <S.ExpandedGrid width={SINGLE_COLUMN_SIZE}>
      {thisImageArray.map((img, imgIdx) => (
        <S.ImageContainer key={imgIdx} selected={current.includes(imgIdx)}>
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
    >
      {thisImageArray.map((img, imgIdx) => (
        <S.ImageContainer key={imgIdx} selected={current.includes(imgIdx)}>
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
        {expanded ? '접기' : '모두보기'}

      </S.Expander>

    </S.Visualizer>
  );
}
export default withTheme(Visualizer);

Visualizer.propTypes = {

};
