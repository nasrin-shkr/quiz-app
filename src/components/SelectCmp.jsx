import React from 'react';

const SelectCmp = ({ options = [] }) => {
  return (
    <div>
      <select>
        {options.map((options) => {
          return <options>{options}</options>;
        })}
      </select>
    </div>
  );
};

export default SelectCmp;
