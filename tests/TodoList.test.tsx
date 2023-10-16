import { cleanup, render, setup } from "$fresh-testing-library/components.ts";
import { afterEach, beforeAll, describe, it } from "$std/testing/bdd.ts";
import state from "../state.ts";
import { AppState } from "../islands/App.tsx";
import TodoList from "../islands/TodoList.tsx";
import { assertEquals, assertExists, assertNotEquals } from "$std/assert/mod.ts";

describe("TodoList.tsx test", () => {
  beforeAll(setup);
  afterEach(cleanup);

  it("should display list of todos...", () => {
    const todos = ["Foo", "Bar", "Baz"];
    state.todos.value = todos;
    const { getAllByRole, queryByText } = render(
      <AppState.Provider value={state}>
        <TodoList/>
      </AppState.Provider>
    );
    // verify that all todos are displayed
    for(let i = 0; i < todos.length; i++) {
      assertExists(queryByText(todos[i]));
    }
    // Each todo has a delete button
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
