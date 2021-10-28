import sessionStorage from 'redux-persist/lib/storage/session';
import { createReducer, createSetValueAction, setValueReducer } from '@/redux/common/helper-functions';

/** prefix */
const PREFIX = 'MINI_GAME';

/** initial state */
const INITIAL_STATE = {
  isLoaded: false,
  place: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  handwriting: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  riddle: false,
  placeAccomplished: false,
  handwritingAccomplished: false,
};

/** type */
export const types = {
  SET_VALUE: `${PREFIX}/SET_VALUE`,
  SET_LOADED: `${PREFIX}/SET_LOADED`,
  RESET: `${PREFIX}/RESET`,
  FETCH_MINI_GAME: `${PREFIX}/FETCH_MINI_GAME`,
  SET_MINI_GAME: `${PREFIX}/SET_MINI_GAME`,

  SET_PLACE: `${PREFIX}/SET_PLACE`,
  SET_FIRESTORE_PLACE: `${PREFIX}/SET_FIRESTORE_PLACE`,

  SET_HANDWRITING: `${PREFIX}/SET_HANDWRITING`,
  SET_FIRESTORE_HANDWRITING: `${PREFIX}/SET_FIRESTORE_HANDWRITING`,

  SET_STAGE: `${PREFIX}/SET_STAGE`,
  SET_FIRESTORE_STAGE: `${PREFIX}/SET_FIRESTORE_STAGE`,

};

/** action */
export const actions = {
  setValue: createSetValueAction(types.SET_VALUE),
  setLoaded: (isLoaded) => ({ type: types.SET_LOADED, isLoaded }),
  reset: () => ({ type: types.RESET }),
  fetchMiniGame: (user) => ({ type: types.FETCH_MINI_GAME, user }),
  setMiniGame: (stages) => ({ type: types.SET_MINI_GAME, stages }),

  setPlace: (places) => ({ type: types.SET_PLACE, places }),
  setFirestorePlace: (user, places) => ({
    type: types.SET_FIRESTORE_PLACE, user, places,
  }),

  setHandwriting: (handwritings) => ({ type: types.SET_HANDWRITING, handwritings }),
  setFirestoreHandwriting: (user, handwritings) => ({
    type: types.SET_FIRESTORE_HANDWRITING, user, handwritings,
  }),

  setStage: (stage, isCompleted) => ({ type: types.SET_STAGE, stage, isCompleted }),
  setFirestoreStage: (user, stage, isCompleted) => ({
    type: types.SET_FIRESTORE_STAGE, user, stage, isCompleted,
  }),

};

/** reducer */
const reducer = createReducer(INITIAL_STATE, {
  [types.SET_VALUE]: setValueReducer,
  [types.SET_LOADED]: (draft, action) => { draft.isLoaded = action.isLoaded; },
  [types.SET_MINI_GAME]: (draft, action) => {
    draft.place = action.stages.place; draft.handwriting = action.stages.handwriting;
    draft.riddle = action.stages.riddle; draft.placeAccomplished = action.stages.placeAccomplished;
    draft.handwritingAccomplished = action.stages.handwritingAccomplished;
  },
  [types.SET_PLACE]: (draft, action) => { draft.place = action.places; },
  [types.SET_HANDWRITING]: (draft, action) => { draft.handwriting = action.handwritings; },
  [types.SET_STAGE]: (draft, action) => { draft[action.stage] = action.isCompleted; },

  [types.RESET]: (draft) => {
    draft.isLoaded = false;
    draft.handwriting = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    draft.riddle = false;
  },
});
export default reducer;

export const miniGamePersistConfig = {
  key: 'miniGame',
  storage: sessionStorage,
  blacklist: [],
};
