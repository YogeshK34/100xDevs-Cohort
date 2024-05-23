// src/FilterInput.js
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { filterState } from './state';

function FilterInput() {
  const [filterValue, setFilterValue] = useState('');
  const [filter, setFilter] = useRecoilState(filterState);

  const applyFilter = () => {
    setFilter(filterValue);
  };

  return (
    <div>
      <input
        type="text"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        placeholder="Filter todos"
      />
      <button onClick={applyFilter}>Apply Filter</button>
    </div>
  );
}

export default FilterInput;
