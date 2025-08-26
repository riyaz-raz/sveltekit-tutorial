<script lang="ts">
    import { goto } from "$app/navigation";
    import { deleteTodo, getTodos } from "$lib/runes/todo.svelte";

    let todos = $derived(getTodos());
</script>

<div class="m-4">
    <div class="mb-4">
        {#if todos.length === 0}
            <p>No Todos found...!</p>
        {:else}
            <ul>
                {#each todos as todo}
                    <li
                        class="flex justify-between items-center p-2 border-b border-gray-400"
                    >
                        <span class="truncate">{todo.name}</span>

                        <!-- actions -->
                        <div class="flex space-x-2">
                            <button
                                type="button"
                                class="py-1 px-2 bg-blue-500 rounded text-white"
                                onclick={() => goto(`/todo_form?id=${todo.id}`)}
                            >
                                Edit
                            </button>

                            <button
                                type="button"
                                class="py-1 px-2 bg-red-500 rounded text-white"
                                onclick={() => deleteTodo(todo.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
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
