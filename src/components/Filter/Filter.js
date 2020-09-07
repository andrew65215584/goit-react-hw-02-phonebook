import React, { Component } from 'react';

function Filter({ filter, getFilterName }) {
  return (
    <>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={getFilterName}
      />
    </>
  );
}
export default Filter;
