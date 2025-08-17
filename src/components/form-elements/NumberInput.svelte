<script lang="ts">
    import infoIcon from "../../assets/info-icon.svg?raw";

    const { title, label, placeholder, initial, info, oninput } = $props();

    function handleInput(event: Event) {
        if (oninput) {
            const newValue = parseFloat((event.target as HTMLInputElement).value);
            oninput(newValue || 0);
        }
    }
</script>

<label class="label">
    {title}
    {#if info}
        <div class="tooltip" data-tip={info}>
            <div class="w-4 h-4">
                {@html infoIcon}
            </div>
        </div>
    {/if}
</label>
<label class="input">
    <span class="label">{label}</span>
    <input
        type="number"
        {placeholder}
        value={initial}
        oninput={handleInput}
    />
</label>
