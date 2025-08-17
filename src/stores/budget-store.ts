import { atom, computed } from "nanostores";

export let annualSalary = atom(0);
export let deposit = atom(0);
export let mortgageMultiplier = atom(4.5);

export const maxLoanAmount = computed(
  [annualSalary, mortgageMultiplier],
  (salary, multiplier) => {
    return salary * multiplier;
  },
);

export const totalBudget = computed(
    [maxLoanAmount, deposit],
    (loan, deposit) => {
        return loan + deposit
    },
);
