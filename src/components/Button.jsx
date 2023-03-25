import React from 'react';

const Button = ({ className, title, onClick }) => {
  return (
    <button className="p-2 bg-red-400 " onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
