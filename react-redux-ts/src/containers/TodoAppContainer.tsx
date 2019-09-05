import * as React from "react";
import styled from "styled-components";
import TodoAdd from "../components/TodoAdd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { todoInsert, todoToggle, todoRemove } from "../modules/todo";
import TodoList from "../components/TodoList";
const TodoAppContainerBlock = styled.div``;
interface TodoAppContainerProps {}

const TodoAppContainer: React.SFC<TodoAppContainerProps> = props => {
  const todos = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  const onInsert = (text: string) => {
    dispatch(todoInsert(text));
  };
  const onToggle = (id: number) => {
    dispatch(todoToggle(id));
  };
  const onRemove = (id: number) => {
    dispatch(todoRemove(id));
  };
  return (
    <TodoAppContainerBlock>
      <TodoAdd onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoAppContainerBlock>
  );
};

export default TodoAppContainer;
