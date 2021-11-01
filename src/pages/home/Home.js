import React, { useMemo } from 'react';
import { Route, useLocation, Switch } from 'react-router-dom';
import HomeContainer from '@C/home/Home';
import MobileHomeContainer from '@C/home/MobileHome';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { AnimatePresence } from 'framer-motion';
import NotFound from '@P/NotFound';

function Home({ theme }) {
  const location = useLocation();
  const fromLightEvent = location.state?.fromLightEvent ?? false;
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const isLoaded = useMemo(() => theme.windowWidth > 0, [theme.windowWidth]);

  return (
    <>
      <Header hamburgerColor={theme.palette.WHITE} backVisible={false} />
      {isLoaded && !isMobile && <HomeContainer theme={theme} fromLightEvent={fromLightEvent} />}
      {isLoaded && isMobile && <MobileHomeContainer theme={theme} fromLightEvent={fromLightEvent} />}
    </>
  );
}
export default withMountEvent(withTheme(Home));

Home.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.objectOf(PropTypes.any),
    windowWidth: PropTypes.number,
  }).isRequired,
};
