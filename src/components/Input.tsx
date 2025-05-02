import React from "react";

interface InputProps {
  label?: string;
  iconSrc?: string;
  id: string;
  placeholder?: string;
  className?: string;
  onChange: (value: number) => void;
  error?: string;
  value?: number | string | undefined;
  max?: number;
  min?: number;
  step?: number
}

const Input: React.FC<InputProps> = ({
  label,
  iconSrc,
  id,
  placeholder = "0",
  className,
  onChange,
  error,
  value,
  max,
  min = 0,
  step
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(parseFloat(value));
  };

  return (
    <div>
      {(label || error) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <label
              htmlFor={id}
              className="block text-neutral-grey-500 text-preset-5"
            >
              {label}
            </label>
          )}
          {error && (
            <span className="text-neutral-orange-400 text-preset-5">{error}</span>
          )}
        </div>
      )}
      <div className="relative">
        {iconSrc && (
          <img
            src={iconSrc}
            alt={`${label} icon`}
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
          />
        )}
        <input
          type="number"
          id={id}
          placeholder={placeholder}
          className={`w-full bg-neutral-grey-50 ${
            iconSrc ? "pl-10" : "pl-[10px]"
          } border-2 ${
            error
              ? "border-neutral-orange-400 focus:border-neutral-orange-400"
              : "border-transparent focus:ring-2 focus:ring-primary-green-400"
          } text-right text-neutral-green-900 text-preset-3 rounded-md focus:outline-none placeholder:text-neutral-grey-500 ${
            iconSrc ? "placeholder:text-right" : "placeholder:text-center"
          } ${className}`}
          onChange={handleChange}
          value={value === undefined ? "" : value}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          max={max}
          min={min}
          step={step}
        />
      </div>
    </div>
  );
};

export default Input;