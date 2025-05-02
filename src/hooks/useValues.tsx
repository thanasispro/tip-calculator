import { useState } from "react";

export const useValues = () => {
  const [values, setValues] = useState({
    bill: undefined as number | undefined,
    tipPercent: 0,
    people: undefined as number | undefined,
    activeTip: null as number | null,
    customTip: undefined as number | undefined,
    peopleError: undefined as string | undefined,
  });

  const handleBillChange = (value: number) => {
    setValues((prev) => ({ ...prev, bill: value }));
  };

  const handleTipChange = (value: number) => {
    setValues((prev) => ({
      ...prev,
      activeTip: value,
      tipPercent: value,
      customTip: undefined,
    }));
  };

  const handleCustomTipChange = (value: number) => {
    setValues((prev) => ({
      ...prev,
      customTip: value,
      tipPercent: value,
      activeTip: null,
    }));
  };

  const handlePeopleChange = (value: number) => {
    setValues((prev) => ({
      ...prev,
      people: value,
      peopleError: value === 0 ? "Can't be zero" : undefined,
    }));
  };

  const resetValues = () => {
    setValues({
      bill: undefined,
      tipPercent: 0,
      people: undefined,
      activeTip: null,
      customTip: undefined,
      peopleError: undefined,
    });
  };

  return {
    values,
    handleBillChange,
    handleTipChange,
    handleCustomTipChange,
    handlePeopleChange,
    resetValues,
  };
};