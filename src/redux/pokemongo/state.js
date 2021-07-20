import { createReducer, createSetValueAction, setValueReducer } from '@/redux/common/helper-functions';
import sessionStorage from 'redux-persist/lib/storage/session';

/** prefix */
const PREFIX = 'POKEMONGO';

/** initial state */
const INITIAL_STATE = {
  isLoaded: false,
  placeOne: false,
  placeTwo: false,
  placeThree: false,
  placeFour: false,
  placeFive: false,
  placeSix: false,
};

/** type */
export const types = {
  SET_VALUE: `${PREFIX}/SET_VALUE`,
  SET_LOADED: `${PREFIX}/SET_LOADED`,
  RESET: `${PREFIX}/RESET`,
  SET_POKEMONGOS: `${PREFIX}/SET_POKEMONGOS`,
  SET_POKEMONGO: `${PREFIX}/SET_POKEMONGO`,
  SET_FIRESTORE_POKEMONGO: `${PREFIX}/SET_FIRESTORE_POKEMONGO`,
  FETCH_POKEMONGOS: `${PREFIX}/FETCH_POKEMONGOS`,
};

/** action */
export const actions = {
  setValue: createSetValueAction(types.SET_VALUE),
  setLoaded: (isLoaded) => ({ type: types.SET_LOADED, isLoaded }),
  setPokemongos: (pokemongos) => ({ type: types.SET_POKEMONGOS, pokemongos }),
  setFirestorePokemongo: (user, pokemongo, isCompleted) => ({
    type: types.SET_FIRESTORE_POKEMONGO, user, pokemongo, isCompleted,
  }),
  setPokemongo: (pokemongo, isCompleted) => ({ type: types.SET_POKEMONGO, pokemongo, isCompleted }),
  reset: () => ({ type: types.RESET }),
  fetchPokemongos: (user) => ({ type: types.FETCH_POKEMONGOS, user }),
};

/** reducer */
const reducer = createReducer(INITIAL_STATE, {
  [types.SET_VALUE]: setValueReducer,
  [types.SET_LOADED]: (draft, action) => { draft.isLoaded = action.isLoaded; },
  [types.SET_POKEMONGOS]: (draft, action) => {
    draft.placeOne = action.pokemongos.placeOne;
    draft.placeTwo = action.pokemongos.placeTwo;
    draft.placeThree = action.pokemongos.placeThree;
    draft.placeFour = action.pokemongos.placeFour;
    draft.placeFive = action.pokemongos.placeFive;
    draft.placeSix = action.pokemongos.placeSix;
  },
  [types.SET_POKEMONGO]: (draft, action) => { draft[action.pokemongo] = action.isCompleted; },
  [types.RESET]: (draft) => {
    draft.isLoaded = false; draft.placeOne = false; draft.placeTwo = false;
    draft.placeThree = false; draft.placeFour = false; draft.placeFive = false; draft.placeSix = false;
  },
});
export default reducer;

export const pokemongoPersistConfig = {
  key: 'pokemongo',
  storage: sessionStorage,
  blacklist: [],
};
