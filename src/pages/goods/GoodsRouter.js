import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NotFound from '@/pages/NotFound';

function GoodsRouter({ match }) {
  const location = useLocation();

  return (
    <>
      { goodsRoutes.map((route) => (
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
export default GoodsRouter;

GoodsRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const Goods = lazy(() => import('@P/goods/Goods'));

const Memo = lazy(() => import('@P/goods/GoodsDetail').then(module => ({ default: module.Memo })));
const Sanitizer = lazy(() => import('@P/goods/GoodsDetail').then(module => ({ default: module.Sanitizer })));
const Soju = lazy(() => import('@P/goods/GoodsDetail').then(module => ({ default: module.Soju })));
const Keyring = lazy(() => import('@P/goods/GoodsDetail').then(module => ({ default: module.Keyring })));
const Sticker = lazy(() => import('@P/goods/GoodsDetail').then(module => ({ default: module.Sticker })));
const Sticker4 = lazy(() => import('@P/goods/GoodsDetail').then(module => ({ default: module.Sticker4 })));

const goodsRoutes = [
  {
    path: '',
    component: Goods,
    children: [
      {
        path: '/memo',
        component: Memo,
      },
      {
        path: '/sanitizer',
        component: Sanitizer,
      },
      {
        path: '/soju',
        component: Soju,
      },
      {
        path: '/keyring',
        component: Keyring,
      },
      {
        path: '/sticker',
        component: Sticker,
      },
      {
        path: '/sticker4',
        component: Sticker4,
      },

    ],
  },
];
