<script lang="ts">
    import Stat from "./stats/Stat.svelte";
    import { maxLoanAmount, totalBudget } from "../stores/budget-store";
</script>

<div class="card card-border">
    <div class="card-body">
        <h2 class="card-title">Your Budget Overview</h2>
        <div class="grid grid-cols-2 gap-4">
            <Stat title="Max Loan Amount" color="blue" value={$maxLoanAmount} />
            <Stat title="Total Budget" color="green" value={$totalBudget} />
        </div>
    </div>
</div>
