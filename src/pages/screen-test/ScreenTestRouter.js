import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import NotFound from '@/pages/NotFound';

function ScreenTestRouter({ match }) {
  return (
    <Switch>
      { screenTestRoutes.map((route) => (
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
export default ScreenTestRouter;

ScreenTestRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const ScreenTest = lazy(() => import('@/pages/screen-test/ScreenTest'));
const WaveFourSide = lazy(() => import('@/pages/screen-test/WaveFourSide'));

const screenTestRoutes = [
  {
    path: '/screen-test',
    component: ScreenTest,
  },
  {
    path: '/wave-four-side',
    component: WaveFourSide,
  },

];
