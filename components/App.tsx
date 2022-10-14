import AddTodo from "./AddTodo.tsx";
import TodoList from "./TodoList.tsx";

export default function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoList />
      <AddTodo />
    </div>
  )
}