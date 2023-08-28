import React from 'react';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};

export default Filter;
