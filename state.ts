import { signal } from "@preact/signals";

export type TodosSignal = {
  value: string[];
};

export type TodoSignal = {
  value: string;
};

export type AddTodoFunction = (e: Event) => void;

export type RemoveTodoFunction = (index: number) => void;

export type AppStateType = {
  todos: TodosSignal;
  newtodo: TodoSignal;
  addTodo: AddTodoFunction;
  removeTodo: RemoveTodoFunction;
};

function createAppState(): AppStateType {
  const todos: TodosSignal = signal([]);

  const newtodo: TodoSignal = signal("");

  const addTodo: AddTodoFunction = (e: Event): void => {
    e.preventDefault();
    todos.value = [...todos.value, newtodo.value];
    newtodo.value = "";
  };

  const removeTodo: RemoveTodoFunction = (index: number): void => {
    todos.value = todos.value.filter((_todo: unknown, i: number) =>
      i !== index
    );
  };
  return { todos, newtodo, addTodo, removeTodo };
}

export default createAppState();
