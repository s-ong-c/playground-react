import * as React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
const TodoItemBlock = styled.div<{ visible: boolean }>`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  ${(props) =>
    props.visible &&
    css`
      display: none;
    `}
`;

const Text = styled.div<{ status: boolean }>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  cursor: pointer;
  ${(props) =>
    props.status &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const CheckCircle = styled.div<{ status: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.status &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

interface TodoItemProps {
  title: string;
  status: boolean;
  visible: boolean;
  onDelete: () => void;
  onToggle: () => void;
}

function TodoItem({
  status,
  title,
  visible,
  onDelete,
  onToggle,
}: TodoItemProps) {
  return (
    <TodoItemBlock visible={visible}>
      <CheckCircle onClick={onToggle} status={status}>
        {status ? <MdDone /> : ''}
      </CheckCircle>
      <Text status={status}>{title}</Text>
      <Remove>
        <MdDelete onClick={onDelete} />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
