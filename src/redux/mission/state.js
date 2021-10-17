import sessionStorage from 'redux-persist/lib/storage/session';
import { createReducer, createSetValueAction, setValueReducer } from '@/redux/common/helper-functions';

/** prefix */
const PREFIX = 'MISSION';

/** initial state */
const INITIAL_STATE = {
  isLoaded: false,
  // if null or not: is playing or not
  light: null,
  guestBook: false,
  performance: false,
  competition: false,
  miniOne: false,
  miniTwo: false,
};

/** type */
export const types = {
  SET_VALUE: `${PREFIX}/SET_VALUE`,
  SET_LOADED: `${PREFIX}/SET_LOADED`,
  RESET: `${PREFIX}/RESET`,
  SET_MISSIONS: `${PREFIX}/SET_MISSIONS`,
  SET_LIGHT: `${PREFIX}/SET_LIGHT`,
  SET_FIRESTORE_LIGHT: `${PREFIX}/SET_FIRESTORE_LIGHT`,
  INITIALIZE_LIGHT: `${PREFIX}/INTIALIZE_LIGHT`,
  TERMINATE_LIGHT: `${PREFIX}/TERMINATE_LIGHT`,
  SET_MISSION: `${PREFIX}/SET_MISSION`,
  SET_FIRESTORE_MISSION: `${PREFIX}/SET_FIRESTORE_MISSION`,
  FETCH_MISSIONS: `${PREFIX}/FETCH_MISSIONS`,
};

/** action */
export const actions = {
  setValue: createSetValueAction(types.SET_VALUE),
  setLoaded: (isLoaded) => ({ type: types.SET_LOADED, isLoaded }),
  setMissions: (missions) => ({ type: types.SET_MISSIONS, missions }),
  setLight: (lights) => ({ type: types.SET_LIGHT, lights }),
  setFirestoreLight: (user, lights) => ({ type: types.SET_FIRESTORE_LIGHT, user, lights }),
  initializeLight: (user) => ({ type: types.INITIALIZE_LIGHT, user }),
  terminateLight: (user) => ({ type: types.TERMINATE_LIGHT, user }),
  setMission: (mission, isCompleted) => ({ type: types.SET_MISSION, mission, isCompleted }),
  setFirestoreMission: (user, mission, isCompleted) => ({
    type: types.SET_FIRESTORE_MISSION, user, mission, isCompleted,
  }),
  reset: () => ({ type: types.RESET }),
  fetchMissions: (user) => ({ type: types.FETCH_MISSIONS, user }),
};

/** reducer */
const reducer = createReducer(INITIAL_STATE, {
  [types.SET_VALUE]: setValueReducer,
  [types.SET_LOADED]: (draft, action) => { draft.isLoaded = action.isLoaded; },
  [types.SET_MISSIONS]: (draft, action) => {
    draft.light = action.missions.light;
    draft.guestBook = action.missions.guestBook;
    draft.performance = action.missions.performance;
    draft.competition = action.missions.competition;
    draft.miniOne = action.missions.miniOne;
    draft.miniTwo = action.missions.miniTwo;
  },
  [types.SET_LIGHT]: (draft, action) => { draft.light = action.lights; },
  [types.INITIALIZE_LIGHT]: (draft) => { draft.light = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; },
  [types.TERMINATE_LIGHT]: (draft) => { draft.light = [-1]; },
  [types.SET_MISSION]: (draft, action) => { draft[action.mission] = action.isCompleted; },
  [types.RESET]: (draft) => {
    draft.light = null;
    draft.isLoaded = false; draft.guestBook = false; draft.performance = false;
    draft.competition = false; draft.miniOne = false; draft.miniTwo = false;
  },
});
export default reducer;

export const missionPersistConfig = {
  key: 'mission',
  storage: sessionStorage,
  blacklist: [],
};
