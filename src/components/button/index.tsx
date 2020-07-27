import React from 'react';
import './button.css';

export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {onClick, disabled} = props;

  return (
    <button disabled={disabled} onClick={onClick} className='button'>
      Comparar
    </button>
  );
};

export default Button;
