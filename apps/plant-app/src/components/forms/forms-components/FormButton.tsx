import React from 'react';

interface FormButtonProps {
  type: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({
  type,
  variant = 'primary',
  children,
}) => {
  const buttonClass =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-primary-dark'
      : 'bg-secondary text-white hover:bg-secondary-dark';

  return (
    <button
      type={type}
      className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${buttonClass}`}
    >
      {children}
    </button>
  );
};

export default FormButton;
