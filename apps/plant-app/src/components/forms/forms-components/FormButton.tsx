import React from 'react';

interface FormButtonProps {
  type: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Add this line to allow onClick
  disabled?: boolean; // Optional disabled state
}

const FormButton: React.FC<FormButtonProps> = ({
  type,
  variant = 'primary',
  children,
  onClick,
  disabled = false,
}) => {
  const buttonClass =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-primary-dark'
      : 'bg-secondary text-white hover:bg-secondary-dark';

  return (
    <button
      type={type}
      className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${buttonClass}`}
      onClick={onClick} // Add onClick to the button
      disabled={disabled} // Add disabled to the button
    >
      {children}
    </button>
  );
};

export default FormButton;
