import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import NotFound from '@/pages/NotFound';

function PerformanceRouter({ match }) {
  return (
    <Switch>
      { performanceRoutes.map((route) => (
        <Route
          exact
          key={`${match.path}${route.path}`}
          path={`${match.path}${route.path}`}
          component={route.component}
        />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}
export default PerformanceRouter;

PerformanceRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const PhoneCert = lazy(() => import('@/pages/performance/PhoneCert'));
const HitTheStage = lazy(() => import('@/pages/performance/HitTheStage'));
const SingStealer = lazy(() => import('@/pages/performance/SingStealer'));
const GameTournament = lazy(() => import('@/pages/performance/GameTournament'));

const performanceRoutes = [
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
];
