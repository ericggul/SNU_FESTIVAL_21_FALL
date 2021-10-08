import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

function Indicator({ solvedIndicatorArray, i }) {
  const sortedIndicatorArray = solvedIndicatorArray.sort();
  return (
    <S.StyledIndicator>
      {sortedIndicatorArray.map((e, key) => (
        <S.LightBulb
          light={e}
          key={key}
          current={i === key}
        />
      ))}

    </S.StyledIndicator>
  );
}
export default Indicator;

Indicator.propTypes = {

};
