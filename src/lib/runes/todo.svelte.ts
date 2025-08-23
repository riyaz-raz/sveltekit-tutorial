let _todos = $state<TodoSchema[]>([]);

export function addTodo(text: string) {
    const newTodo: TodoSchema = {
        id: Date.now(),
        name: text,
        isDone: false,
    };
    _todos = [newTodo, ..._todos];
}

export function getTodos(): TodoSchema[] {
  return _todos;
}