import {
  Action,
  Dispatch,
  Middleware,
  MiddlewareAPI,
  ReducersMapObject,
  ThunkAction,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import { combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import employeeSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([employeeSaga]);
}

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [...getDefaultMiddleware(), sagaMiddleware, persistMiddleware],
  });
  sagaMiddleware.run(rootSaga);

  return store;
};

const rootReducer = combineReducers({} as ReducersMapObject);

const persistMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (
  next: Dispatch,
) => (action) => {
  const returnValue = next(action);

  return returnValue;
};

export type IRootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, IRootState, unknown, Action<string>>;

export default createStore;
