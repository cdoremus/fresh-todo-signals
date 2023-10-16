import { useContext } from "preact/hooks";
import { AppState } from "./App.tsx";
import Todo from "./Todo.tsx"

export default function TodoList() {
  const { todos } = useContext(AppState);
  return (
    <div className="todos">
      {/* todos are a signal that contain the todos value */}
      {todos.value?.map((item: string, i: number) => {
        return (
          <Todo text={item} index={i} />
        );
      })}
    </div>
  );
}
