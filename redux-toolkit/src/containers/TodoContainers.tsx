import React from 'react';
import MainTemplate from '../components/MainTemplate';
import { useDispatch, useSelector } from 'react-redux';
import todoSlice from '../modules/todo';
import TodoList from '../components/TodoList';
import { RootState } from '../modules';
import useToggle from '../lib/hooks/useToggle';

export interface TodoContainerProps {}
function TodoContainer(props: TodoContainerProps) {
  const dispatch = useDispatch();

  const onClickSubmit = (todo: string) => {
    dispatch(
      todoSlice.actions.add({
        contents: todo,
        createdTime: new Date().getTime(),
      }),
    );
  };

  const onDelete = (id: string) => {
    dispatch(todoSlice.actions.delete({ id }));
  };
  const onToggle = (id: string) => {
    dispatch(todoSlice.actions.toggle({ id }));
  };

  const items = useSelector((state: RootState) => state.todo.items);
  // button toggle hidden show
  const [closed, setClosed] = useToggle(false);
  return (
    <>
      <MainTemplate addTodoList={onClickSubmit}>
        {items && (
          <TodoList
            todoItems={items}
            onDelete={onDelete}
            onToggle={onToggle}
            onVisible={setClosed}
            visible={closed}
          />
        )}
      </MainTemplate>
    </>
  );
}

export default TodoContainer;
