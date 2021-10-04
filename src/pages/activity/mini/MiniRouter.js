import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { useLocation, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NotFound from '@/pages/NotFound';

function MiniRouter({ match }) {
  const location = useLocation();
  console.log('mini router');

  minigameRoutes.map((route) => route.children.map(
    (childRoute) => console.log(`${match.path}${route.path}${childRoute.path}`),
  ));

  return (
    <>
      { minigameRoutes.map((route) => (
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
              <Route component={NotFound} />
            </Switch>
          </AnimatePresence>
        </React.Fragment>
      ))}
    </>
  );
}
export default MiniRouter;

MiniRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const MiniGame = lazy(() => import('@/pages/activity/mini/MiniGame'));
const GuessTheSong = lazy(() => import('@/pages/activity/mini/GuessTheSong'));
const TreasureHunt = lazy(() => import('@/pages/activity/mini/TreasureHunt'));
const Riddle = lazy(() => import('@/pages/activity/mini/Riddle'));
const Handwriting = lazy(() => import('@/pages/activity/mini/Handwriting'));
const Place = lazy(() => import('@/pages/activity/mini/Place'));
const Omok = lazy(() => import('@/pages/activity/mini/Omok'));
const BlackAndWhite = lazy(() => import('@/pages/activity/mini/BlackAndWhite'));

const minigameRoutes = [
  {
    path: '',
    component: MiniGame,
    children: [
      {
        path: '/riddle',
        component: Riddle,
      },
      {
        path: '/handwriting',
        component: Handwriting,
      },
      {
        path: '/omok',
        component: Omok,
      },
      {
        path: '/place',
        component: Place,
      },
      {
        path: '/guess-the-song',
        component: GuessTheSong,
      },
      {
        path: '/treasure-hunt',
        component: TreasureHunt,
      },
      {
        path: '/black-and-white',
        component: BlackAndWhite,
      },
    ],
  },
];
