import React from 'react';

// 1. Визначення типів для props
interface ButtonProps {
  // Функція, яка буде викликана при натисканні. Вона не повертає значення (void).
  onClick: () => void;
  // Текст, який буде відображено всередині кнопки.
  children: React.ReactNode; 
  // Необов'язковий тип кнопки (button, submit, reset). За замовчуванням 'button'.
  type?: 'button' | 'submit' | 'reset';
}

// 2. Функціональний компонент
const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;