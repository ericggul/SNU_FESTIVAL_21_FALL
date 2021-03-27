import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Lottie404 from '@F/lottie/Lottie404';

function ActivityRouter({ match }) {
  return (
    <>
      { activityRoutes.map((route) => (
        <React.Fragment key={route.path}>
          <Switch>
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

            <Route component={Lottie404} />
          </Switch>
        </React.Fragment>
      ))}
    </>
  );
}
export default ActivityRouter;

ActivityRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const MiniGame = lazy(() => import('@/pages/activity/mini/MiniGame'));
const GuessTheSong = lazy(() => import('@/pages/activity/mini/GuessTheSong'));

const activityRoutes = [
  {
    path: '/mini',
    component: MiniGame,
    children: [
      {
        path: '/guess-the-song',
        component: GuessTheSong,
      },
    ],
  },
];