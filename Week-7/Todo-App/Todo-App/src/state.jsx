// src/state.js
import { atom, selector } from 'recoil';

// Atom to store the list of todos
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

// Atom to store the current filter
export const filterState = atom({
  key: 'filterState',
  default: '',
});

// Selector to filter the todos based on the filterState
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(filterState);
    const list = get(todoListState);

    if (!filter) {
      return list;
    }

    return list.filter((todo) => todo.includes(filter));
  },
});
