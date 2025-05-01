import Button from "./components/Button";
import Input from "./components/Input";
import Result from "./components/Result";
import { useState, useEffect } from "react";
import { calculateSplit } from "./utils/utils";

function App() {
  // Combined state for form values
  const [formValues, setFormValues] = useState({
    bill: undefined as number | undefined,
    tipPercent: 0,
    people: undefined as number | undefined,
    activeTip: null as number | null,
    customTip: undefined as number | undefined
  });
  
  // Calculated results state
  const [results, setResults] = useState({
    tipAmountPerPerson: 0,
    totalAmountPerPerson: 0
  });
  
  // Error state
  const [peopleError, setPeopleError] = useState<string | undefined>(undefined);

  // Calculate results whenever inputs change
  useEffect(() => {
    const { bill, people, tipPercent } = formValues;
    
    // Set error message if people is 0
    setPeopleError(people === 0 ? "Can't be zero" : undefined);

    // Calculate results if all required inputs have values
    if (bill && people && people > 0 && tipPercent !== undefined) {
      const { tipPerPerson, totalPerPerson } = calculateSplit(
        bill,
        people,
        tipPercent
      );
      setResults({
        tipAmountPerPerson: tipPerPerson,
        totalAmountPerPerson: totalPerPerson
      });
    }
  }, [formValues]);

  // Handle bill input changes
  const handleBillChange = (value: number) => {
    setFormValues(prev => ({
      ...prev,
      bill: value
    }));
  };

  // Handle tip button clicks
  const handleTipChange = (value: number) => {
    setFormValues(prev => ({
      ...prev,
      tipPercent: value,
      activeTip: value,
      customTip: undefined
    }));
  };

  // Handle custom tip input changes
  const handleCustomTipChange = (value: number) => {
    setFormValues(prev => ({
      ...prev,
      tipPercent: value,
      customTip: value,
      activeTip: null
    }));
  };

  // Handle people count changes
  const handlePeopleChange = (value: number) => {
    setFormValues(prev => ({
      ...prev,
      people: value
    }));
  };

  // Reset all values
  const handleReset = () => {
    setFormValues({
      bill: undefined,
      tipPercent: 0,
      people: undefined,
      activeTip: null,
      customTip: undefined
    });
    setResults({
      tipAmountPerPerson: 0,
      totalAmountPerPerson: 0
    });
  };

  const { bill, tipPercent, people, activeTip, customTip } = formValues;
  const { tipAmountPerPerson, totalAmountPerPerson } = results;

  const isFormValid = bill !== undefined && people !== undefined && people > 0;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-grey-200">
      <h1 className="sr-only">Tip Calculator</h1>
      <img
        src="/images/logo.svg"
        alt="Splitter Logo"
        className="mt-[50px] lg:mt-0 mb-[40px] lg:mb-[87.86px]"
      />
      <div className="w-full bg-white py-8 md:py-[75.5px] md:px-[54px] px-6 rounded-t-[25px] md:rounded-[25px] md:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col lg:flex-row gap-6 lg:min-w-[920px] lg:gap-8">
        <form className="lg:w-1/2 lg:gap-[40px] flex flex-col gap-6" aria-label="Tip calculator inputs">
          <Input
            iconSrc="/images/icon-dollar.svg"
            id="bill"
            label="Bill"
            onChange={handleBillChange} 
            value={bill}
            aria-describedby="bill-description"
          />
          <fieldset className="flex flex-col gap-2">
            <legend className="text-neutral-grey-500 text-preset-5">Select Tip %</legend>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
              <Button
                text="5%"
                className="h-[48px]"
                onClick={() => handleTipChange(5)}
                active={activeTip === 5}
                aria-pressed={activeTip === 5}
              />
              <Button
                text="10%"
                className="h-[48px]"
                onClick={() => handleTipChange(10)}
                active={activeTip === 10}
                aria-pressed={activeTip === 10}
              />
              <Button
                text="15%"
                className="h-[48px]"
                onClick={() => handleTipChange(15)}
                active={activeTip === 15}
                aria-pressed={activeTip === 15}
              />
              <Button
                text="25%"
                className="h-[48px]"
                onClick={() => handleTipChange(25)}
                active={activeTip === 25}
                aria-pressed={activeTip === 25}
              />
              <Button
                text="50%"
                className="h-[48px]"
                onClick={() => handleTipChange(50)}
                active={activeTip === 50}
                aria-pressed={activeTip === 50}
              />
              <Input
                id="custom"
                placeholder="Custom"
                className="h-[48px]"
                onChange={handleCustomTipChange}
                value={customTip}
                aria-label="Custom tip percentage"
              />
            </div>
          </fieldset>
          <Input
            iconSrc="/images/icon-person.svg"
            id="people"
            label="Number of People"
            onChange={handlePeopleChange}
            value={people}
            error={peopleError}
            step={1}
            aria-invalid={!!peopleError}
            aria-describedby={peopleError ? "people-error" : undefined}
          />
        </form>
        <Result
          tipAmountPerPerson={tipAmountPerPerson}
          totalAmountPerPerson={totalAmountPerPerson}
          className="lg:w-1/2"
          onReset={handleReset}
          disabled={!isFormValid}
        />
      </div>
    </main>
  );
}

export default App;