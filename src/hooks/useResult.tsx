import { useState, useEffect } from "react";
import { calculateSplit } from "../utils/utils";

export const useResult = (bill: number | undefined, people: number | undefined, tipPercent: number) => {
  const [result, setResult] = useState({
    tipAmountPerPerson: 0,
    totalAmountPerPerson: 0,
  });

  useEffect(() => {
    if (bill && people && tipPercent) {
      const { tipPerPerson, totalPerPerson } = calculateSplit(bill, people, tipPercent);
      setResult({ tipAmountPerPerson: tipPerPerson, totalAmountPerPerson: totalPerPerson });
    } else {
      setResult({ tipAmountPerPerson: 0, totalAmountPerPerson: 0 });
    }
  }, [bill, people, tipPercent]);

  return result;
};