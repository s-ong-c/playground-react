import * as React from "react";
import styled from "styled-components";
import { Todo } from "../modules/todo/types";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  header {
    width: 100%;
    display: flex;
    background: linear-gradient(
      100deg,
      #008282,
      #005682,
      #000056,
      #2b0057,
      #6a006a
    );
    border-radius: 16px;
    flex: 1;
    h3 {
      align-items: center;
      justify-content: center;
      display: flex;
      flex-basis: 90%;
      color: white;
    }
    button {
      display: flex;
      margin: 1rem;
      width: 4rem;
      outline: none;
      border: none;
      border-radius: 4px;
      background: #20c997;
      font-size: 1rem;
      color: white;
      justify-items: center;
      align-content: center;
      justify-content: space-around;
      cursor: pointer;
      &:hover,
      &:focus {
        background: #20c997;
      }
    }
  }
`;
interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList: React.SFC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  return (
    <TodoListBlock>
      <ul>
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
            key={todo.id}
          />
        ))}
      </ul>
    </TodoListBlock>
  );
};

export default TodoList;
