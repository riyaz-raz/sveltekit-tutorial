<script lang="ts">
    import { getCount, incrementCount } from "$lib/runes/counter.svelte";

    let count = $derived(getCount());
</script>

<div>
    <button onclick={()=> incrementCount()}>Current count is : {count}</button>
</div>