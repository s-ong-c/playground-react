import { createAction, createStandardAction } from "typesafe-actions";

// 타입 선언
export const TODO_INSERT = "todo/TODO_INSERT";
export const TODO_TOGGLE = "todo/TODO_TOGGLE";
export const TODO_REMOVE = "todo/TODO_REMOVE";

let nextId = 1;

// action 함수

export const todoInsert = createAction(TODO_INSERT, action => (text: string) =>
  action({
    id: nextId++,
    text
  })
);

export const todoToggle = createStandardAction(TODO_TOGGLE)<number>();
export const todoRemove = createStandardAction(TODO_REMOVE)<number>();
