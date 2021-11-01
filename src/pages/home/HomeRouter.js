import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NotFound from '@P/NotFound';

function HomeRouter({ match }) {
  const location = useLocation();
  return (
    <>
      { homeRoutes.map((route) => (
        <React.Fragment key={route.path}>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                key={`${match.path}${route.path}`}
                path={`${match.path}${route.path}`}
                component={route.component}
              />
            </Switch>
          </AnimatePresence>
        </React.Fragment>
      ))}
    </>
  );
}

export default HomeRouter;

const Home = lazy(() => import('@P/home/Home'));
const LightMissionComplete = lazy(() => import('@P/home/LightMissionComplete'));

const homeRoutes = [
  {
    path: '',
    component: Home,
  },
  {
    path: '/light-mission-completed-yeaaay',
    component: LightMissionComplete,
  },
];
