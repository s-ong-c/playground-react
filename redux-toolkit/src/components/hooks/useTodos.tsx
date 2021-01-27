import todoSlice from '../../modules/todo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function useTodos() {
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

  return {
    onClickSubmit,
    onToggle,
    onDelete,
    items,
  };
}
