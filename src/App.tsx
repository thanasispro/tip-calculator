import Button from "./components/Button";
import Input from "./components/Input";
import Result from "./components/Result";
import { useState, useEffect } from "react";
import { calculateSplit } from "./utils/utils";

function App() {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [tipPercent, setTipPercent] = useState<number>(0);
  const [people, setPeople] = useState<number | undefined>(undefined);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState<number>(0);
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState<number>(0);
  const [activeTip, setActiveTip] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState<number | undefined>(undefined);
  const [peopleError, setPeopleError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setPeopleError(people === 0 ? "Can't be zero" : undefined);

    if (bill && people && tipPercent) {
      const { tipPerPerson, totalPerPerson } = calculateSplit(
        bill,
        people,
        tipPercent
      );
      setTipAmountPerPerson(tipPerPerson);
      setTotalAmountPerPerson(totalPerPerson);
    }
  }, [bill, tipPercent, people]);

  const handleBillChange = (value: number) => {
    setBill(value);
  };

  const handleTipChange = (value: number) => {
    setActiveTip(value);
    setTipPercent(value);
    setCustomTip(undefined);
  };

  const handleCustomTipChange = (value: number) => {
    setCustomTip(value);
    setTipPercent(value);
    setActiveTip(null);
  };

  const handlePeopleChange = (value: number) => {
    setPeople(value);
  };

  const handleReset = () => {
    setBill(undefined);
    setTipPercent(0);
    setPeople(undefined);
    setTipAmountPerPerson(0);
    setTotalAmountPerPerson(0);
    setActiveTip(0);
    setCustomTip(undefined);
  };

  console.log(customTip);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-grey-200">
      <img
        src="./images/logo.svg"
        alt="Logo"
        className="mt-[50px] lg:mt-0 mb-[40px] lg-mb-[87.86px]"
      />
      <div className="w-full  bg-white py-8 md:py-[75.5px] md:px-[54px] px-6 rounded-t-[25px] md:rounded-b-[25px] md:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col lg:flex-row gap-6 lg:min-w-[920px] lg:gap-8">
        <div className="lg:w-1/2 lg:gap-[40px] flex flex-col gap-6">
          <Input
            iconSrc="./images/icon-dollar.svg"
            id="bill"
            label="Bill"
            onChange={handleBillChange}
            value={bill}
          />
          <div className="flex flex-col gap-2">
            <p className="text-neutral-grey-500 text-preset-5">Select Tip %</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
              <Button
                text="5%"
                className="h-[48px]"
                onClick={() => handleTipChange(5)}
                active={activeTip === 5}
              />
              <Button
                text="10%"
                className="h-[48px]"
                onClick={() => handleTipChange(10)}
                active={activeTip === 10}
              />
              <Button
                text="15%"
                className="h-[48px]"
                onClick={() => handleTipChange(15)}
                active={activeTip === 15}
              />
              <Button
                text="25%"
                className="h-[48px]"
                onClick={() => handleTipChange(25)}
                active={activeTip === 25}
              />
              <Button
                text="50%"
                className="h-[48px]"
                onClick={() => handleTipChange(50)}
                active={activeTip === 50}
              />
              <Input
                id="custom"
                placeholder="Custom"
                className="h-[48px]"
                onChange={handleCustomTipChange}
                value={customTip}
              />
            </div>
          </div>
          <Input
            iconSrc="./images/icon-person.svg"
            id="people"
            label="Number of People"
            onChange={handlePeopleChange}
            value={people}
            error={peopleError}
            step={1}
          />
        </div>
        <Result
          tipAmountPerPerson={tipAmountPerPerson}
          totalAmountPerPerson={totalAmountPerPerson}
          className="lg:w-1/2"
          onReset={handleReset}
          disabled={!bill}
        />
      </div>
    </div>
  );
}

export default App;
