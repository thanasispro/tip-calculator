import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, className, variant = 'primary', disabled, onClick, active }) => {
  const baseClasses =
    variant === 'primary'
      ? 'bg-neutral-green-900 text-white text-preset-3'
      : 'bg-primary-green-400 text-neutral-green-900 text-preset-4';

  const activeClasses = active ? 'bg-primary-green-400 text-neutral-green-900' : '';

  return (
    <button
      className={`flex flex-row justify-center items-center p-2 gap-2 isolate rounded-[5px] ${baseClasses} hover:bg-primary-green-400 hover:text-neutral-green-900 ${className} ${disabled ? 'bg-neutral-green-750 text-neutral-green-800 opacity-20 cursor-not-allowed hover:bg-neutral-green-750 hover:text-neutral-green-800' : 'hover:cursor-pointer'} ${activeClasses}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;