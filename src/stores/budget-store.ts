import { atom, computed } from "nanostores";
import type {BuyerType} from "../types/buyer-info.ts";
import {calculateStampDuty} from "../utils/stamp-duty.ts";

export let annualSalary = atom(0);
export let deposit = atom(0);
export let mortgageMultiplier = atom(4.5);

export let buyerType = atom<BuyerType>("standard");

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

export const stampDuty = computed(
    [totalBudget, buyerType],
    (budget, type) => {
        return calculateStampDuty(budget, type);
    },
);
