<script lang="ts">
    import { addTodo, getTodoById, updateTodo } from "$lib/runes/todo.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    let editId = data?.id;
    let todo = "";

    if (editId !== null) {
        let eTodo = getTodoById(Number.parseInt(editId));
        todo = eTodo?.name ?? "";
    }

    function handleSubmit() {
        editId !== null ? updateTodo(Number.parseInt(editId), todo) : addTodo(todo);
        history.back();
    }
</script>

<form class="m-4 max-w-md space-y-4" onsubmit={handleSubmit}>
  <div class="flex flex-col">
    <label for="name" class="mb-1 font-medium">Todo</label>
    <input
      id="name"
      type="text"
      name="name"
      class="rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      bind:value={todo}
      placeholder="Enter a todo..."
      required
    />
  </div>

  <button
    type="submit"
    class="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
  >
    Save
  </button>
</form>
