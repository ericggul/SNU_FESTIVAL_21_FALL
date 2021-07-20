import React, {
  useEffect, useCallback, useMemo, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import useModal from '@U/hooks/useModal';
import useAlert from '@U/hooks/useAlert';
import SignInGuide from '@F/modal/content/SignInGuide';
import MissionGuide from '@F/modal/content/MissionGuide';
import { useUser } from '@U/hooks/useAuth';
import usePokemongo from '@U/hooks/usePokemongo';
import { pokemongoCollectionRef } from '@U/initializer/firebase';

import { HeaderContent } from '@F/layout/Header';
import LocationBox from '@C/pokemongo/LocationBox';
import Intro from '@C/tarot/Intro';
import Cards from '@C/tarot/Cards';
import Background from '@C/tarot/Background';
import { actions } from '@/redux/pokemongo/state';
import { toast } from 'react-toastify';
import GuestBookStamp from '@I/icon/stamp/guest-book-stamp.png';
import * as S from './styles';

function Pokemongo({ theme, user }) {
  const { isAuthorized } = useUser();
  const pokemongo = usePokemongo();
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);
  const { modalComponent: missionModalComponent, setIsModalOpen: setIsMissionModalOpen } = useModal(MissionGuide, {
    name: '포켓몬',
    stamp: GuestBookStamp,
  });

  const { alertComponent: missionAlertComponent, setIsAlertOpen: setIsMissionAlertOpen } = useAlert('Hello');

  const placeArray = ['placeOne', 'placeTwo', 'placeThree', 'placeFour', 'placeFive', 'placeSix'];
  const dispatch = useDispatch();

  const handleBoxClick = useCallback((i) => {
    setIsMissionAlertOpen(true);
    if (isAuthorized && pokemongo.isLoaded && !pokemongo.placeOne) {
      dispatch(actions.setFirestorePokemongo(user, 'placeOne', true));
      setIsMissionModalOpen(true);
    } else {
      setIsSignInModalOpen(true);
    }
  });

  // useEffect(() => {
  //   if (isAuthorized && !pokemongo.placeOne) {
  //     dispatch(actions.setFirestorePokemongo(user, 'placeOne', true));
  //     setIsMissionModalOpen(true);
  //   }
  // }, [isAuthorized, dispatch, pokemongo.isLoaded, pokemongo.placeOne, user, setIsMissionModalOpen]);

  console.log(pokemongo);

  return (
    <>
      <HeaderContent>포켓몬고 테스트</HeaderContent>
      <S.StyledPokemongo>
        <LocationBox cleared={pokemongo.placeOne} handleClick={() => handleBoxClick(0)} />
        <LocationBox cleared={pokemongo.placeTwo} handleClick={() => handleBoxClick(1)} />
        <LocationBox cleared={pokemongo.placeThree} handleClick={() => handleBoxClick(2)} />
        <LocationBox cleared={pokemongo.placeFour} handleClick={() => handleBoxClick(3)} />
        <LocationBox cleared={pokemongo.placeFive} handleClick={() => handleBoxClick(4)} />
        <LocationBox cleared={pokemongo.placeSix} handleClick={() => handleBoxClick(5)} />
      </S.StyledPokemongo>
      {missionModalComponent}
      {signInModalComponent}
      {missionAlertComponent}
    </>
  );
}
export default withTheme(Pokemongo);

Pokemongo.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
