import React from 'react';
import PokemongoContainer from '@C/pokemongo/Pokemongo';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';

function Pokemongo() {
  return (
    <>
      <Header />
      <PokemongoContainer />
    </>
  );
}
export default withMountEvent(Pokemongo);
