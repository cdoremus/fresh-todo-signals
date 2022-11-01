import { Signal, signal, effect, computed } from "@preact/signals";

export type AddTodoFunction = (e: Event) => void;

export type RemoveTodoFunction = (index: number) => void;

export type AppStateType = {
  todos: Signal<string[]>;
  currentTodo: Signal<string>;
  todoCount: Signal<number>;
  addTodo: AddTodoFunction;
  removeTodo: RemoveTodoFunction;
  // dispose: () => void;
};

function createAppState(): AppStateType {
  const todos = signal<string[]>([]);

  const currentTodo = signal<string>("");

  const todoCount = computed(() => todos.value.length);

  const addTodo: AddTodoFunction = (e: Event): void => {
    e.preventDefault();
    todos.value = [...todos.value, currentTodo.value];
    currentTodo.value = "";
  };

  const removeTodo: RemoveTodoFunction = (index: number): void => {
    todos.value = todos.value.filter((_todo: unknown, i: number) =>
      i !== index
    );    // todoCount.value = todoCount.value - 1;
  };
  return { todos, currentTodo, addTodo, removeTodo, todoCount };
}

export default createAppState();
