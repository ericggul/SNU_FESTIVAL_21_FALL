import {
  all, call, put, takeLeading,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { actions, types } from './state';
import { fetchPokemongosFromFirestore, setPokemongoInFirestore } from './api';

export function* fetchPokemongos(action) {
  try {
    console.log('action', action);
    console.log('action.user', action.user);
    const pokemongos = yield call(fetchPokemongosFromFirestore, action.user);
    console.log('pkg', pokemongos);
    if (pokemongos) yield put(actions.setPokemongos(pokemongos));
    yield put(actions.setLoaded(true));
  } catch {
    toast('Fetchpokemongo가 문제입니다. 다시 시도해주세요.');
  }
}

export function* setFirestorePokemongo(action) {
  try {
    yield call(setPokemongoInFirestore, action.user, action.pokemongo, action.isCompleted);
    console.log('passed');
    yield put(actions.setPokemongo(action.pokemongo, action.isCompleted));
  } catch {
    toast('여기가 문제입니다 사장님 불안정합니다. 다시 시도해주세요.');
  }
}

export default function* () {
  yield all([
    takeLeading(types.FETCH_POKEMONGOS, fetchPokemongos),
    takeLeading(types.SET_FIRESTORE_POKEMONGO, setFirestorePokemongo),
  ]);
}
