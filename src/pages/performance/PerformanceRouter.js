import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NotFound from '@/pages/NotFound';

function PerformanceRouter({ match }) {
  const location = useLocation();
  return (
    <>
      { performanceRoutes.map((route) => (
        <React.Fragment key={route.path}>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                key={`${match.path}${route.path}`}
                path={`${match.path}${route.path}`}
                component={route.component}
              />
              { route.children && route.children.map((childRoute) => (
                <Route
                  exact
                  key={`${match.path}${route.path}${childRoute.path}`}
                  path={`${match.path}${route.path}${childRoute.path}`}
                  component={childRoute.component}
                />
              ))}
            </Switch>
          </AnimatePresence>
        </React.Fragment>
      ))}
    </>
  );
}
export default PerformanceRouter;

PerformanceRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const Performance = lazy(() => import('@/pages/performance/Performance'));
const PhoneCert = lazy(() => import('@/pages/performance/PhoneCert'));
const HitTheStage = lazy(() => import('@/pages/performance/HitTheStage'));
const SingStealer = lazy(() => import('@/pages/performance/SingStealer'));
const GameTournament = lazy(() => import('@/pages/performance/GameTournament'));

const performanceRoutes = [
  {
    path: '',
    component: Performance,
    children: [
      {
        path: '/phone-cert',
        component: PhoneCert,
      },
      {
        path: '/hit-the-stage',
        component: HitTheStage,
      },
      {
        path: '/sing-stealer',
        component: SingStealer,
      },
      {
        path: '/game-tournament',
        component: GameTournament,
      },
    ],
  },

];
