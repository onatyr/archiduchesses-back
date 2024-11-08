import React from 'react';

interface TextInputProps {
  id: string;
  label: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'; // Extendable to other types as needed
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  placeholder?: string;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder = '',
  error,
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-bold mb-2">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        error ? 'border-red-500' : ''
      }`}
    />
    {error && <p className="text-red-500 text-xs italic">{error}</p>}
  </div>
);

export default TextInput;
