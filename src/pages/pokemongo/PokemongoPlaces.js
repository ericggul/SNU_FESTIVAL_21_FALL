import React from 'react';
import PropTypes from 'prop-types';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';
import PlaceOneContainer from '@C/pokemongo/PlaceOne';

function PlaceOne() {
  return (
    <>
      <Header />
      <PlaceOneContainer />
    </>
  );
}

export default withMountEvent(PlaceOne);
