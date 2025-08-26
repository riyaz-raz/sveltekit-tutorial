import { browser } from "$app/environment";

let _todos = $state<TodoSchema[]>(loadTodos());

//Helper functions

function saveTodos() {
  if (browser) {
    localStorage.setItem('todos', JSON.stringify(_todos));
  }
}

function loadTodos(): TodoSchema[] {
  if (!browser) return [];
  let data = localStorage.getItem('todos');
  return data ? JSON.parse(data) : [];
}

//CRUD functions

export function addTodo(text: string) {
  const newTodo: TodoSchema = {
    id: Date.now(),
    name: text,
    isDone: false,
  };
  _todos = [newTodo, ..._todos];
  saveTodos()
}

export function getTodos(): TodoSchema[] {
  return _todos;
}

export function getTodoById(id: number): TodoSchema | undefined {
  return _todos.find((t) => t.id === id);
}

export function updateTodo(id: number, text: string) {
  _todos = _todos.map((t) => t.id === id ? { ...t, name: text } : t);
  saveTodos();
}

export function deleteTodo(id:number){
 _todos = _todos.filter((t)=> t.id !== id);
 saveTodos();
}

