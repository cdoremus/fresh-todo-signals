import { useContext } from "preact/hooks";
import { AppState } from "./App.tsx";

type TodoProps = {
  text: string;
  index: number;
}

export default function Todo({text, index}: TodoProps) {
  const { removeTodo } = useContext(AppState);

  return (
    <div className="list-item" key={text}>
      <div className="item-todo" data-testid={"todo-" + index}>
        {text}
      </div>
      <button className="x-button" onClick={() => removeTodo(index)}>
        X
      </button>
    </div>

  )
}