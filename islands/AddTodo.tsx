import Preact from 'preact';
import { useContext } from "preact/hooks";
import { AppState } from "./App.tsx";
import type { AppStateType } from "../state.ts";
import { PreactConsumer } from "https://esm.sh/v95/preact@10.11.0/src/index.d.ts";

export default function AddTodo() {
  const { currentTodo, addTodo } = useContext<AppStateType>(AppState);
  return (
    <form onSubmit={addTodo}>
      <label htmlFor="todo">
        Add todo:
        <input
          id="todo"
          name="todo"
          value={currentTodo.value}
          onChange={(e) =>
            currentTodo.value = (e.target as HTMLInputElement).value}
        />
        <input type="submit" value="Add" />
      </label>
    </form>
  );
}
