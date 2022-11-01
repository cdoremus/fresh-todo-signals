import { useContext, useEffect } from "preact/hooks";
import { useSignal, effect } from "@preact/signals";
import { AppState } from "./App.tsx";


export default function TodoCount() {
  const { todoCount } = useContext(AppState);

  // useEffect(() => {
  //   return () => {
  //     // this returned function automatically runs
  //     // when the component unmounts
  //     dispose();
  //   };
  // }, []);

  return (
    <div className="todo-count">Todo Count: {todoCount.value}</div>
  );
}