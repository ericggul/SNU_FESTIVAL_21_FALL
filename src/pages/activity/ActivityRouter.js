import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { useLocation, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NotFound from '@/pages/NotFound';

function ActivityRouter({ match }) {
  // TODO: router 버그 있음
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
                <React.Fragment key={childRoute.path}>
                  <Route
                    exact
                    key={`${match.path}${route.path}${childRoute.path}`}
                    path={`${match.path}${route.path}${childRoute.path}`}
                    component={childRoute.component}
                  />
                  {childRoute.children && childRoute.children.map((grandChildRoute) => (
                    <Route
                      exact
                      key={`${match.path}${route.path}${childRoute.path}${grandChildRoute.path}`}
                      path={`${match.path}${route.path}${childRoute.path}${grandChildRoute.path}`}
                      component={grandChildRoute.component}
                    />
                  ))}
                </React.Fragment>
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
const MiniGame = lazy(() => import('@/pages/activity/mini/MiniGame'));
const GuessTheSong = lazy(() => import('@/pages/activity/mini/GuessTheSong'));
const TreasureHunt = lazy(() => import('@/pages/activity/mini/TreasureHunt'));
const Riddle = lazy(() => import('@/pages/activity/mini/Riddle'));
const BlackAndWhite = lazy(() => import('@/pages/activity/mini/BlackAndWhite'));
const Radio = lazy(() => import('@/pages/activity/Radio'));
const Competition = lazy(() => import('@/pages/activity/Competition'));
const Group = lazy(() => import('@/pages/activity/Group'));
const GroupImages = lazy(() => import('@/pages/activity/GroupImages'));

const activityRoutes = [
  {
    path: '',
    component: ActivityMain,
    children: [
      {
        path: '/mini',
        component: MiniGame,
        children: [
          {
            path: '/guess-the-song',
            component: GuessTheSong,
          },
          {
            path: '/treasure-hunt',
            component: TreasureHunt,
          },
          {
            path: '/riddle',
            component: Riddle,
          },
          {
            path: '/black-and-white',
            component: BlackAndWhite,
          },
        ],
      },
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
    ],
  },
];
