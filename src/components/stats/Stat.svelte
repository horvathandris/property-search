<script lang="ts">
    let { title, value, color = "blue" } = $props();
    const colors = {
        "blue": {
            bg: "bg-blue-100",
            text: "text-blue-700",
        },
        "green": {
            bg: "bg-green-100",
            text: "text-green-700",
        },
        "red": {
            bg: "bg-red-100",
            text: "text-red-700",
        },
    };
</script>

<div class="stats">
    <div class={["stat", colors[color].bg]}>
        <div class="stat-title">{title}</div>
        <div class={["stat-value", colors[color].text]}>£{value.toLocaleString()}</div>
    </div>
</div>
