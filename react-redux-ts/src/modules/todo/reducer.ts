import { createReducer } from "typesafe-actions";
import { TODO_INSERT, TODO_TOGGLE, TODO_REMOVE } from "./actions";
import { TodosState, TodosAction } from "./types";

const initialState: TodosState = [];

// Reducer
const todo = createReducer<TodosState, TodosAction>(initialState, {
  [TODO_INSERT]: (state, action) =>
    state.concat({
      ...action.payload,
      done: false
    }),
  [TODO_TOGGLE]: (state, { payload: id }) =>
    state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
  [TODO_REMOVE]: (state, { payload: id }) =>
    state.filter(todo => todo.id !== id)
});

export default todo;
