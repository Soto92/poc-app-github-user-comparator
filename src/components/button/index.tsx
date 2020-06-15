import React from 'react';
import './button.css';

export interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {onClick} = props;

  return (
    <button onClick={onClick} className='button'>
      Comparar
    </button>
  );
};

export default Button;
