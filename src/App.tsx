import Button from "./components/Button";
import Input from "./components/Input";
import Result from "./components/Result";
import { useValues } from "./hooks/useValues";
import { useResult } from "./hooks/useResult";

function App() {
  const {
    values: { bill, tipPercent, people, activeTip, customTip, peopleError },
    handleBillChange,
    handleTipChange,
    handleCustomTipChange,
    handlePeopleChange,
    resetValues,
  } = useValues();

  const { tipAmountPerPerson, totalAmountPerPerson } = useResult(bill, people, tipPercent);

  return (
    <main
      className={`
        min-h-screen 
        flex flex-col items-center justify-start 
        bg-neutral-grey-200
      `}
    >
      <img
        src="./images/logo.svg"
        alt="Logo"
        className={`
          mt-[50px] lg:mt-[163px]
          mb-[40px] lg:mb-[87.86px]
        `}
      />
      <div
        className={`
          w-full bg-white 
          py-8 md:py-[75.5px] lg:py-6 
          px-6 md:px-[54px] lg:px-6 
          rounded-t-[25px] md:rounded-b-[25px] 
          md:w-2/3 lg:w-1/2 xl:w-1/3 
          flex flex-col lg:flex-row 
          gap-6 lg:gap-8 lg:min-w-[920px]
        `}
      >
        <div
          className={`
            lg:w-1/2 
            flex flex-col gap-6 
            lg:gap-[40px]
            lg:py-[16.5px]
          `}
        >
          <Input
            iconSrc="./images/icon-dollar.svg"
            id="bill"
            label="Bill"
            onChange={handleBillChange}
            value={bill}
          />
          <div className="flex flex-col gap-2">
            <p className="text-neutral-grey-500 text-preset-5">Select Tip %</p>
            <div
              className={`
                grid grid-cols-2 md:grid-cols-3 
                gap-4 items-center
              `}
            >
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
          className={`
            lg:w-1/2
          `}
          onReset={resetValues}
          disabled={!bill}
        />
      </div>
    </main>
  );
}

export default App;