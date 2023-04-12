import React from 'react';

const RadioSelection = ({ options = [], onSelectHandler }) => {
  // console.log(options);
  return (
    <div>
      {options.map((option) => {
        return (
          <div className="bg-blue-400 flex" onClick={onSelectHandler}>
            <input
              className="mx-3"
              key={option}
              type="radio"
              id={option}
              name={option}
              value={option}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioSelection;
