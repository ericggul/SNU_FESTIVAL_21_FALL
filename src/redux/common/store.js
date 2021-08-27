import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import userReducer, { userPersistConfig } from '@/redux/user/state';
import miniGameReducer, { miniGamePersistConfig } from '@/redux/mini-game/state';
import missionReducer, { missionPersistConfig } from '@/redux/mission/state';
import performanceReducer, { performancePersistConfig } from '@/redux/performance/state';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import miniGameSaga from '@/redux/mini-game/saga';
import missionSaga from '@/redux/mission/saga';

const reducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  mission: persistReducer(missionPersistConfig, missionReducer),
  miniGame: persistReducer(miniGamePersistConfig, miniGameReducer),
  performanceMission: persistReducer(performancePersistConfig, performanceReducer),
});

/**
 * NOTE: rootPersistConfig는 'reducer'를 최소 묶음으로 persist를 적용함.
 *       reducer 마다 'state'를 최소 묶음으로 nested Persists 를 적용할 수도 있음.
 * */
const rootPersistConfig = {
  key: 'snufestival/root',
  storage: sessionStorage,
  whitelist: [],
};
const persistedReducer = persistReducer(rootPersistConfig, reducer);

/**
 * saga 적용
 */
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (
  (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose);
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

function* rootSaga() {
  yield all([miniGameSaga(), missionSaga()]);
}
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);
export default { store, persistor };
