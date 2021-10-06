import React from 'react';
const Filter = ({ filterValue, onFilterChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterChange}
      />
    </label>
  );
};
export default Filter;
