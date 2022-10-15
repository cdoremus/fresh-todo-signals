import { createContext } from "preact";
import state, { type AppStateType } from "../state.ts";
import AddTodo from "../islands/AddTodo.tsx";
import TodoList from "../islands/TodoList.tsx";

export const AppState = createContext<AppStateType>({} as AppStateType);

export default function App() {
  return (
    <div className="App">
      <AppState.Provider value={state}>
        <h1>Todos</h1>
        <TodoList />
        <AddTodo />
      </AppState.Provider>
    </div>
  );
}
