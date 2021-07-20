import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import PropTypes from 'prop-types';
import PlaceOne from '@/pages/pokemongo/PokemongoPlaces';

function PokemongoRouter({ match }) {
  return (
    <>
      { pokemongoRoutes.map((route) => (
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
export default PokemongoRouter;

PokemongoRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const Pokemongo = lazy(() => import('@/pages/pokemongo/Pokemongo'));

const pokemongoRoutes = [
  {
    path: '',
    component: Pokemongo,
    children: [
      {
        path: '/wellington-beef-steak',
        component: PlaceOne,
      },
    ],
  },
];
