// src/App.js
import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoInput from './TodoInput';
import FilterInput from './FilterInput';
import TodoList from './TodoList';

function App() {
  return (
    <RecoilRoot>
      <div>
        <h1>Todo App with Recoil</h1>
        <TodoInput />
        <FilterInput />
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;




// Create a todo app with filtering logic using Recoil
// 2 input boxes
// button
// todos store in => atom
// filter(gym) => (gym)
// selector (the current set of todos)
