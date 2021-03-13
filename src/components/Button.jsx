import React from 'react';

const Button = ({ children, onClick, type }) => {
  return (
    <button type={type} className="main-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
