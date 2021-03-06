import * as React from 'react';
import styled from 'styled-components';
import useToggle from '../lib/hooks/useToggle';
import Form from './Form';
import useTodos from './hooks/useTodos';
import TodoList from './TodoList';

const MainTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  position: relative;

  .wrapper {
    width: 100%;
    display: flex;
    margin-top: 5rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .contents {
    width: 512px;
    height: 768px;

    position: relative;
    background: white;
    border-radius: 16px;
    position: relative;
    background: white;
    margin: 0 auto;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    margin-top: 6rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
  }
`;
const { useState } = React;

function TodoApp(){
  const [todo, setTodo] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const {onClickSubmit, onToggle, onDelete, items} = useTodos();
  const [closed, setClosed] = useToggle(false);
  return (
    <MainTemplateBlock>
      <div className="wrapper">
        <Form value={todo} onChange={onChange} onSubmit={onClickSubmit} />
      </div>
      <div className="contents">
        {items && (
          <TodoList
            todoItems={items}
            onDelete={onDelete}
            onToggle={onToggle}
            onVisible={setClosed}
            visible={closed}
          />
        )}
      </div>
    </MainTemplateBlock>
  );
}

export default TodoApp;
