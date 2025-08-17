<script lang="ts">
    import NumberInput from "./form-elements/NumberInput.svelte";
    import {annualSalary, mortgageMultiplier, deposit} from "../stores/budget-store.ts";

    function handleAnnualSalaryChange(value: number) {
        $annualSalary = value;
    }

    function handleDepositChange(value: number) {
        $deposit = value;
    }

    function handleMortgageMultiplierChange(value: number) {
        $mortgageMultiplier = value;
    }
</script>

<form>
    <fieldset class="fieldset">
        <NumberInput
                label="£"
                title="Annual Salary"
                placeholder="e.g. 35000"
                oninput={handleAnnualSalaryChange}
        />
        <NumberInput
                label="£"
                title="Deposit"
                placeholder="e.g. 50000"
                oninput={handleDepositChange}
        />
        <NumberInput
                label="x"
                title="Mortgage Multiplier"
                placeholder="e.g. 4.5"
                initial={$mortgageMultiplier}
                info="The maximum mortgage amount you can afford is calculated by multiplying your annual income by this multiplier."
                oninput={handleMortgageMultiplierChange}
        />
        <NumberInput
                label="%"
                title="Mortgage Interest Rate"
                placeholder="e.g. 4.5"
                initial={4.5}
                info="The annual interest rate charged on your mortgage."
        />
        <NumberInput
                label="Years"
                title="Mortgage Loan Term"
                placeholder="e.g. 25"
                initial={25}
                info="The length of time you will be repaying your mortgage."
        />
    </fieldset>
</form>