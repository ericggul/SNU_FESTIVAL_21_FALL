import React, { useState, useEffect } from 'react';
import { AnswersData } from '@C/jabti/Data';
import TextReveal from '@F/animation/text-animation/TextReveal';
import PropTypes from 'prop-types';
import * as S from './styles';

function Loading({ index, colorCode }) {
  return (
    <S.StyledLoading>
      {
        new Array(4).fill(0).map((e, i) => (
          <TextReveal
            text={AnswersData[i][Math.floor(index / (2 ** (3 - i))) % 2 === 0 ? 0 : 1]}
            durationTime={500}
            delayTime={{ min: 500 * i, max: 500 * i }}
            color={colorCode}
            key={i}
          />
        ))
      }
    </S.StyledLoading>
  );
}
export default Loading;

Loading.propTypes = {

};
