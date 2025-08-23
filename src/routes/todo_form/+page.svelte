<script lang="ts">
    import { addTodo } from "$lib/runes/todo.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    let editId = data?.id;
    let todo = "";

    function handleSubmit() {
        addTodo(todo);
        history.back();
    }
</script>

<form class="m-4">
    <div class=" mb-4">
        <label for="name">Todo</label>
        <input type="text" name="name" class="rounded" bind:value={todo} />
    </div>

    <button
        type="button"
        class="px-4 py-2 rounded bg-blue-500 text-white"
        onclick={() => handleSubmit()}
    >
        Save
    </button>
</form>
