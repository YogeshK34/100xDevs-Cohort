// src/TodoInput.js
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './state';

function TodoInput() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    setTodoList([...todoList, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoInput;
