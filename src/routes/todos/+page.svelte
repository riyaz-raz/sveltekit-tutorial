<script lang="ts">
    import { goto } from "$app/navigation";
    import { getTodos } from "$lib/runes/todo.svelte";

    let todos = getTodos();
</script>

<div class="m-4">
    <div class="mb-4">
        {#if todos.length === 0}
            <p>No Todos found...!</p>
        {:else}
            <ul>
                {#each todos as todo}
                    <li>{todo.name}</li>
                {/each}
            </ul>
        {/if}
    </div>

    <button
        type="button"
        class=" p-2 bg-blue-500 rounded text-white"
        onclick={() => goto("/todo_form")}
    >
        New Todo
    </button>
</div>
