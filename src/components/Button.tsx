import React from 'react';

type ButtonPropsType = {
  children: any;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: React.FC<ButtonPropsType> = ({ children, onClick, type }) => {
  return (
    <button type={type} className="main-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
