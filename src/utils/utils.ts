export const calculateSplit = (bill: number, persons: number, tipPercent: number) => {
    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;
    const totalPerPerson = total / persons;
    const tipPerPerson = tipAmount / persons;

    return {
        totalPerPerson,
        tipPerPerson,
    };
};