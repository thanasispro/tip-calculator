import React from "react";
import Button from "./Button";

interface ResultProps {
  tipAmountPerPerson: number;
  totalAmountPerPerson: number;
  className?: string;
  onReset: () => void;
  disabled?: boolean;
}

const Result: React.FC<ResultProps> = ({
  tipAmountPerPerson,
  totalAmountPerPerson,
  className,
  onReset,
  disabled,
}) => {
  return (
    <section
      className={`bg-neutral-green-900 rounded-lg px-[23px] md:px-[47.5px] py-[29.5px] md:py-[43px] lg:px-10 lg:py-[37.5px] flex flex-col gap-3 md:gap-2 lg:gap-32 lg:justify-between ${className}`}
      aria-labelledby="result-heading"
    >
      <h2 id="result-heading" className="sr-only">Calculation Results</h2>
      <div className="flex flex-col lg:gap-4 gap-2">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white text-preset-5">Tip Amount</p>
            <p className="text-neutral-grey-500 text-preset-6">/ per person</p>
          </div>
          <p className="text-primary-green-400 text-preset-1" aria-live="polite">
            ${tipAmountPerPerson.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white text-preset-5">Total</p>
            <p className="text-neutral-grey-500 text-preset-6">/ per person</p>
          </div>
          <p className="text-primary-green-400 text-preset-1" aria-live="polite">
            ${totalAmountPerPerson.toFixed(2)}
          </p>
        </div>
      </div>
      <Button
        text="RESET"
        variant="secondary"
        onClick={onReset}
        disabled={disabled}
        aria-label="Reset all values"
      />
    </section>
  );
};

export default Result;