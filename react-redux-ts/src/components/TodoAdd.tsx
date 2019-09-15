import React, { FormEvent } from "react";
import styled from "styled-components";

const { useState } = React;
const TodoAddBlock = styled.form`
  display: flex;
  width: 100%;
  height: 2rem;
  justify-content: space-between;
  input {
    flex: 1;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 1px solid #dee2e6;
  }
  button {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background: #20c997;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    outline: none;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    width: 5rem;
    cursor: pointer;
    &:hover,
    &:focus {
      background: #6147ad;
    }
  }
`;
interface TodoAddProps {
  onInsert: (text: string) => void;
}

const TodoAdd: React.SFC<TodoAddProps> = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
  };
  return (
    <TodoAddBlock onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </TodoAddBlock>
  );
};

export default TodoAdd;
