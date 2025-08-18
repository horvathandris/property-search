<script lang="ts">
    import infoIcon from "../../assets/info-icon.svg?raw";

    const { id, title, info, options, oninput } = $props();

    function handleInput(event: Event) {
        if (oninput) {
            oninput((event.target as HTMLSelectElement).value);
        }
    }
</script>

<label class="label" for={id}>
    {title}
    {#if info}
        <div class="tooltip" data-tip={info}>
            <div class="w-4 h-4">
                {@html infoIcon}
            </div>
        </div>
    {/if}
</label>

<select class="select" {id} oninput={handleInput}>
    {#each options as option}
        <option value={option.value}>{option.label}</option>
    {/each}
</select>