import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BACKGROUND_PALETTES } from '@C/clothing/data';
import * as S from './styles';

function ControlArea({
  touched, alterValue, clearAlter, currentBackground, onBackgroundClick,
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <S.Container expanded={expanded}>
      <S.ExpandButton
        onClick={() => setExpanded(exp => !exp)}
      >
        <S.Text>{expanded ? '>' : '<'}</S.Text>
      </S.ExpandButton>
      <S.ControlUnit expanded={expanded}>
        <S.BackgroundUnit>
          <S.Text>배경</S.Text>
          <S.BackgroundGrid>
            {BACKGROUND_PALETTES.map((color, i) => (
              <S.SingleColor
                i
                key={i}
                background={color}
                onClick={() => onBackgroundClick(i)}
                selected={currentBackground === i}
              />
            ))}
          </S.BackgroundGrid>
        </S.BackgroundUnit>
        <S.SizeUnit>
          <S.Text>사이즈</S.Text>
          <S.ControlIcon
            onMouseDown={() => alterValue(1)}
            onMouseLeave={() => clearAlter()}
            onMouseUp={() => clearAlter()}
            onTouchStart={() => alterValue(1)}
            onTouchEnd={() => clearAlter()}
            onTouchCancel={() => clearAlter()}
          >
            {touched === 1 ? <p>||</p> : <>+</>}
          </S.ControlIcon>
          <S.ControlIcon
            onMouseDown={() => alterValue(-1)}
            onMouseLeave={clearAlter}
            onMouseUp={clearAlter}
            onTouchStart={() => alterValue(-1)}
            onTouchEnd={clearAlter}
            onTouchCancel={clearAlter}
          >
            {touched === -1 ? <p>||</p> : <>-</>}
          </S.ControlIcon>
        </S.SizeUnit>

      </S.ControlUnit>
    </S.Container>

  );
}
export default ControlArea;

ControlArea.propTypes = {

};
