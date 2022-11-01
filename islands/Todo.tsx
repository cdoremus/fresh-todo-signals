import { useContext } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { AppState } from "./App.tsx";

type TodoProps = {
  text: string;
  index: number;
}

export default function Todo({text, index}: TodoProps) {
  const { removeTodo } = useContext(AppState);
  const showConfirm = useSignal<boolean>(false);


  const handleRemove = () => {
    // if (confirm("Do you really want to delete this item?")) {
    //   removeTodo(index)
    // }
    showConfirm.value = true;
  }

  const dialogYes = () => {
    showConfirm.value = false;
    removeTodo(index);
  }

  const dialogNo = () => {
    showConfirm.value = false;
  }

  const confirmDelete = () => {
    return (
      <div id="confirmDialog" className="confirm">
        <div>Are you sure you want to delete?</div>
        <button onClick={dialogYes}>Yes</button>
        <button onClick={dialogNo}>No</button>
      </div>
    );
  }

  return (
    <div className="list-item" key={text}>
      <div className="item-todo">
        {text}
      </div>
      <button className="x-button" onClick={handleRemove}>
        X
      </button>
      { showConfirm.value ?
        confirmDelete()
        : ""
      }
    </div>

  )
}