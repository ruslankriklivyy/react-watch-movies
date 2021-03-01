import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button className="main-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
