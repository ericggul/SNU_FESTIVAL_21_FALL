import {
  all, call, put, takeLeading,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  fetchMiniGameFromFirestore, setPlaceInFirestore, setHandwritingInFirestore, setStageInFirestore,
} from '@/redux/mini-game/api';
import { actions, types } from './state';

export function* fetchMiniGame(action) {
  try {
    const stages = yield call(fetchMiniGameFromFirestore, action.user);
    if (stages) yield put(actions.setMiniGame(stages));
    yield put(actions.setLoaded(true));
  } catch {
    toast('인터넷이 불안정합니다. 다시 시도해주세요.');
  }
}

export function* setFirestorePlace(action) {
  console.log('setfirestoreplace, saga', action.user, action.places);
  try {
    yield call(setPlaceInFirestore, action.user, action.places);
    yield put(actions.setPlace(action.places));
  } catch {
    toast('인터넷이 불안정합니다. 다시 시도해주세요.');
  }
}

export function* setFirestoreHandwriting(action) {
  console.log('setfirestoreplace, saga', action.user, action.handwritings);
  try {
    yield call(setHandwritingInFirestore, action.user, action.handwritings);
    console.log('put, saga');
    yield put(actions.setHandwriting(action.handwritings));
  } catch {
    toast('인터넷이 불안정합니다. 다시 시도해주세요.');
  }
}

export function* setFirestoreStage(action) {
  console.log('firestore stage');
  try {
    yield call(setStageInFirestore, action.user, action.stage, action.isCompleted);
    yield put(actions.setStage(action.stage, action.isCompleted));
  } catch {
    toast('인터넷이 불안정합니다. 다시 시도해주세요.');
  }
}

export default function* () {
  yield all([
    takeLeading(types.FETCH_MINI_GAME, fetchMiniGame),
    takeLeading(types.SET_FIRESTORE_PLACE, setFirestorePlace),
    takeLeading(types.SET_FIRESTORE_HANDWRITING, setFirestoreHandwriting),
    takeLeading(types.SET_FIRESTORE_STAGE, setFirestoreStage),
  ]);
}
