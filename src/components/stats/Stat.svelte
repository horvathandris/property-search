<script lang="ts">
    let { title, value, color = "blue" } = $props();
</script>

<div class="stats">
    <div class={["stat", `bg-${color}-50`]}>
        <div class="stat-title">{title}</div>
        <div class={["stat-value", `text-${color}-500`]}>£{value.toLocaleString()}</div>
    </div>
</div>
