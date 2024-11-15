import React from 'react';

interface ErrorMessageProps {
  message?: string;
  variant?: 'error' | 'info';
  size?: 'sm' | 'lg';
  showIcon?: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  variant = 'error',
  size = 'sm',
  showIcon = false,
}) => {
  if (!message) return null;

  const icon = showIcon ? '⚠️' : '';
  const colorClass =
    variant === 'error'
      ? 'text-error dark: text-dark-error'
      : 'text-onBackground dark:text-dark-onBackground';
  const sizeClass = size === 'sm' ? 'text-xs' : 'text-sm';

  return (
    <div className={`${colorClass} ${sizeClass}`}>
      {icon} {message}
    </div>
  );
};

export default ErrorMessage;
