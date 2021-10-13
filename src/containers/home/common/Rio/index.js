import React from 'react';

import * as CS from '@C/home/common/styles';
import SleepRio from '@I/home/mobile/sleep-rio.png';
import SleepRioTwo from '@I/home/mobile/sleep-rio2.png';
import WakeRio from '@I/home/mobile/wake-rio.png';
import PropTypes from 'prop-types';
import * as S from './styles';

function Rio({
  waked, top, left, width, clickRio, withText = true,
}) {
  const handleClick = () => {

  };
  return (
    <>
      <CS.Rio
        onClick={() => clickRio()}
        waked={waked}
        src={waked ? WakeRio : SleepRio}
        top={top}
        left={left}
        width={width}
      />
      {waked && withText
      && (
      <CS.RioBubble
        top={top}
        left={left}
        width={width}
      >
        GWAAAK!
      </CS.RioBubble>
      )}
    </>
  );
}
export default Rio;

Rio.propTypes = {

};
