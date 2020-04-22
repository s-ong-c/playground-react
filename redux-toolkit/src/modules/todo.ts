import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { getState } from '../lib/utils';

export interface IItem {
  id: string;
  contents: string;
  createdTime: number;
  isCompleted: boolean;
}

export interface ITodo {
  items: IItem[];
  currentFilter: Filter;
}

export enum Filter {
  ALL = 'All',
  ACTIVE = 'Active',
  DONE = 'Done',
}

export interface TodoState {
  items: IItem[];
  currentFilter: Filter;
}

const initialState: TodoState = getState('todo', {
  items: [],
  currentFilter: Filter.ALL,
});
export interface IAddPayload {
  contents: string;
  createdTime: number;
}

const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add(state: ITodo, { payload }: PayloadAction<IAddPayload>) {
      const { contents, createdTime } = payload;

      state.items.push({
        id: `item_${createdTime}`,
        contents,
        createdTime,
        isCompleted: false,
      });
    },
    delete(state: ITodo, { payload }: PayloadAction<{ id: string }>) {
      const newItems = state.items.filter(({ id }) => payload.id !== id);

      state.items = newItems;
    },
    toggle(state: ITodo, { payload }: PayloadAction<{ id: string }>) {
      const newItems = state.items.map((item: IItem) => {
        if (payload.id === item.id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
      state.items = newItems;
    },
  },
});
export const selectPostId = (state: RootState) => state.todo.items;

export default todo;
