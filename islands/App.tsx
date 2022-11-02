import { createContext } from "preact";
import state, { type AppStateType } from "../state.ts";
import AddTodo from "../islands/AddTodo.tsx";
import TodoList from "../islands/TodoList.tsx";
import TodoCount from "./TodoCount.tsx";

export const AppState = createContext<AppStateType>({} as AppStateType);

export default function App() {
  return (
    <div className="App">
      <AppState.Provider value={state}>
        <h1>Deno Fresh Todo App</h1>
        <h2>Using Preact Signals for State Management</h2>
        <TodoList />
        <AddTodo />
        <TodoCount />
      </AppState.Provider>
      <a className="standalone-counter" href="/counter">Local State Demo</a>
    </div>
  );
}
