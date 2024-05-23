// src/TodoList.js
import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './state';

function TodoList() {
  const filteredTodoList = useRecoilValue(filteredTodoListState);

  return (
    <ul>
      {filteredTodoList.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default TodoList;
