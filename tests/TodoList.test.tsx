import { cleanup, render, setup } from "$fresh-testing-library";
import { afterEach, beforeAll, describe, it } from "$std/testing/bdd.ts";
import state from "../state.ts";
import { AppState } from "../islands/App.tsx";
import TodoList from "../islands/TodoList.tsx";
import { assertEquals, assertExists } from "$std/assert/mod.ts";

describe("TodoList.tsx test", () => {
  beforeAll(setup);
  afterEach(cleanup);

  it("should display list of todos...", () => {
    const todos = ["Foo", "Bar", "Baz"];
    state.todos.value = todos;
    const { getByTestId, getAllByRole } = render(
      <AppState.Provider value={state}>
        <TodoList/>
      </AppState.Provider>
    );
    const todo0 = getByTestId("todo-0");
    assertExists(todo0);
    const todo1 = getByTestId("todo-1");
    assertExists(todo1);
    const todo2 = getByTestId("todo-2");
    assertExists(todo2);
    const buttons = getAllByRole("button");
    assertEquals(buttons.length, 3)
  });

  it("should not display list of todos...",  () => {
    const todos = [] as string[];
    state.todos.value = todos;
    const { queryAllByRole } = render(
      <AppState.Provider value={state}>
        <TodoList/>
      </AppState.Provider>
    );
    // queryAllBy returns an empty array; getAllBy just throws error
    const buttons = queryAllByRole("button");
    assertEquals(buttons.length, 0)
  });

});
