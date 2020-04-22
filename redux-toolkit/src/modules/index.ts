import todo, { TodoState } from './todo';
import {
  configureStore,
  Dispatch,
  Middleware,
  MiddlewareAPI,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { setState } from '../lib/utils';

export type RootState = {
  todo: TodoState;
};

const rootReducer = combineReducers({
  todo: todo.reducer,
});
const persistMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (
  next: Dispatch,
) => action => {
  const returnValue = next(action);

  setState(getState());

  return returnValue;
};
export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), persistMiddleware],
});
