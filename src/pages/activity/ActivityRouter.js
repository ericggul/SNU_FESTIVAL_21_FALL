import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { useLocation, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NotFound from '@/pages/NotFound';

function ActivityRouter({ match }) {
  const location = useLocation();
  return (
    <>
      { activityRoutes.map((route) => (
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
export default ActivityRouter;

ActivityRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const ActivityMain = lazy(() => import('@/pages/activity/Activity'));
const MiniGameRouter = lazy(() => import('@/pages/activity/mini/MiniRouter'));
const Radio = lazy(() => import('@/pages/activity/Radio'));
const Competition = lazy(() => import('@/pages/activity/Competition'));
const Group = lazy(() => import('@/pages/activity/Group'));
const GroupImages = lazy(() => import('@/pages/activity/GroupImages'));
const MiniGame = lazy(() => import('@/pages/activity/mini/MiniGame'));
const GuessTheSong = lazy(() => import('@/pages/activity/mini/GuessTheSong'));
const TreasureHunt = lazy(() => import('@/pages/activity/mini/TreasureHunt'));
const Riddle = lazy(() => import('@/pages/activity/mini/Riddle'));
const Handwriting = lazy(() => import('@/pages/activity/mini/Handwriting'));
const Place = lazy(() => import('@/pages/activity/mini/Place'));
const Omok = lazy(() => import('@/pages/activity/mini/Omok'));
const BlackAndWhite = lazy(() => import('@/pages/activity/mini/BlackAndWhite'));

const activityRoutes = [
  {
    path: '',
    component: ActivityMain,
    children: [
      {
        path: '/radio',
        component: Radio,
      },
      {
        path: '/competition',
        component: Competition,
      },
      {
        path: '/group',
        component: Group,
      },
      {
        path: '/group/images',
        component: GroupImages,
      },
      {
        path: '/mini',
        component: MiniGame,
      },
      {
        path: '/mini/omok',
        component: Omok,
      },
      {
        path: '/mini/riddle',
        component: Riddle,
      },
      {
        path: '/mini/handwriting',
        component: Handwriting,
      },
      {
        path: '/mini/place',
        component: Place,
      },
    ],
  },
];
