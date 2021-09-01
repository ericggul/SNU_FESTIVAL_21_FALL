import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import PropTypes from 'prop-types';
import {
  SYBG, SYBT, SYGG, SYGT, SWBG, SWBT, SWGG, SWGT,
  PYBG, PYBT, PYGG, PYGT, PWBG, PWBT, PWGG, PWGT,
} from '@/pages/jabti/JabtiDetail';

function JabtiRouter({ match }) {
  return (
    <>
      { jabtiRoutes.map((route) => (
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

            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      ))}
    </>
  );
}
export default JabtiRouter;

JabtiRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const Jabti = lazy(() => import('@/pages/jabti/Jabti'));

const jabtiRoutes = [
  {
    path: '',
    component: Jabti,
    children: [
      {
        path: '/sybg',
        component: SYBG,
      },
      {
        path: '/sybt',
        component: SYBT,
      },
      {
        path: '/sygg',
        component: SYGG,
      },
      {
        path: '/sygt',
        component: SYGT,
      },
      {
        path: '/swbg',
        component: SWBG,
      },
      {
        path: '/swbt',
        component: SWBT,
      },
      {
        path: '/swgg',
        component: SWGG,
      },
      {
        path: '/swgt',
        component: SWGT,
      },
      {
        path: '/pybg',
        component: PYBG,
      },
      {
        path: '/pybt',
        component: PYBT,
      },
      {
        path: '/pygg',
        component: PYGG,
      },
      {
        path: '/pygt',
        component: PYGT,
      },
      {
        path: '/pwbg',
        component: PWBG,
      },
      {
        path: '/pwbt',
        component: PWBT,
      },
      {
        path: '/pwgg',
        component: PWGG,
      },
      {
        path: '/pwgt',
        component: PWGT,
      },

    ],
  },
];
