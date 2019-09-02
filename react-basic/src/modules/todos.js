const CHANGE_INPUT = 'todo/CHAGNE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE_CHECK = 'todo/TOGGLE_CHECK';
const REMOVE = 'todo/REMOVE';

let id = 0;

export const changeInput = input => ({ type: CHANGE_INPUT, payload: input });
export const insert = text => ({
  type: INSERT,
  payload: {
    id: ++id,
    text,
  },
});
export const toggle = id => ({ type: TOGGLE_CHECK, payload: id });
export const remove = id => ({ type: REMOVE, payload: id });

const initialState = {
  input: '',
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat({
          ...action.payload,
          done: false,
        }),
      };
    case TOGGLE_CHECK:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.paylaod ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
export default todos;
