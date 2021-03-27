import { createReducer, createSetValueAction, setValueReducer } from '@/redux/common/helper-functions';
import sessionStorage from 'redux-persist/lib/storage/session';

/** prefix */
const PREFIX = 'MINI_GAME';

/** initial state */
const INITIAL_STATE = {
  isLoading: false,
  stage1: false,
  stage2: false,
  stage3: false,
  stage4: false,
  treasureHunt: null, // NOTE: null 이 아닌 배열이면 보물찾기 진행 중
};

/** type */
export const types = {
  SET_VALUE: `${PREFIX}/SET_VALUE`,
  SET_LOADING: `${PREFIX}/SET_LOADING`,
  RESET: `${PREFIX}/RESET`,
  START_TREASURE_HUNT: `${PREFIX}/START_TREASURE_HUNT`,
  END_TREASURE_HUNT: `${PREFIX}/END_TREASURE_HUNT`,
  PUSH_TREASURE_HUNT: `${PREFIX}/PUSH_TREASURE_HUNT`,
};

/** action */
export const actions = {
  setValue: createSetValueAction(types.SET_VALUE),
  setLoading: (isLoading) => ({ type: types.SET_LOADING, isLoading }),
  reset: () => ({ type: types.RESET }),
  startTreasureHunt: () => ({ type: types.START_TREASURE_HUNT }),
  endTreasureHunt: () => ({ type: types.END_TREASURE_HUNT }),
  pushTreasureHunt: (treasure) => ({ type: types.PUSH_TREASURE_HUNT, treasure }),

};

/** reducer */
const reducer = createReducer(INITIAL_STATE, {
  [types.SET_VALUE]: setValueReducer,
  [types.SET_LOADING]: (draft, action) => { draft.isLoading = action.isLoading; },
  [types.RESET]: (draft) => { draft.stage1 = false; }, // TODO: 리셋
  [types.START_TREASURE_HUNT]: (draft) => { draft.treasureHunt = []; },
  [types.END_TREASURE_HUNT]: (draft) => { draft.treasureHunt = null; },
  [types.PUSH_TREASURE_HUNT]: (draft, action) => {
    if (draft.treasureHunt !== null) {
      draft.treasureHunt = [...draft.treasureHunt, action.treasure];
    }
  },
});
export default reducer;

export const miniGamePersistConfig = {
  key: 'miniGame',
  storage: sessionStorage,
  blacklist: [],
};
