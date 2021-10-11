import React, { useEffect } from 'react';
import MiniGameContainer from '@C/activity/mini/home/MiniGame';
import Header from '@F/layout/Header';
import { withTheme } from 'styled-components';
import withMountEvent from '@U/hoc/withMountEvent';
import PropTypes from 'prop-types';
import Swirl from '@I/activity/black-and-white/swirl.svg';
import RedBalloon from '@I/activity/treasure-hunt/balloon-red.png';
import GreenBalloon from '@I/activity/treasure-hunt/balloon-green.png';
import PurpleBalloon from '@I/activity/treasure-hunt/balloon-purple.png';
import AliceOpening from '@I/activity/riddle/alice/alice-opening.png';
import HauntedHouseOpening from '@I/activity/riddle/hounted-house/haunted-house-opening.png';
import Polaroid from '@I/activity/home/polaroid.png';
import MobilePolaroid from '@I/activity/home/polariod-mobile.png';
import { preloadImage } from '@U/functions/preload';

function MiniGame({ theme }) {
  useEffect(() => {
    [RedBalloon, GreenBalloon, PurpleBalloon, AliceOpening, HauntedHouseOpening,
      Swirl, Polaroid, MobilePolaroid].forEach(preloadImage);
  }, []);

  return (
    <>
      <Header hamburgerColor={theme.palette.WHITE} />
      <MiniGameContainer theme={theme} />
    </>
  );
}
export default withTheme(withMountEvent(MiniGame));

MiniGame.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.objectOf(PropTypes.any),
    windowWidth: PropTypes.number,
  }).isRequired,
};
