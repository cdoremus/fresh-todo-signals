import { assertEquals } from "$std/assert/mod.ts";
import { cleanup, render, setup } from "$fresh-testing-library/components.ts";
import { afterEach, beforeAll, describe, it } from "$std/testing/bdd.ts";
import state from "../state.ts";
import { AppState } from "../islands/App.tsx";
import TodoCount from "../islands/TodoCount.tsx";

describe("TodoCount.tsx test", () => {
  beforeAll(setup);
  afterEach(cleanup);

  it("should display number of todos...", () => {
    const todos = ["Foo", "Bar", "Baz"];
    state.todos.value = todos;
    const { getByText } = render(
      <AppState.Provider value={state}>
        <TodoCount/>
      </AppState.Provider>
    );
    const countElement = getByText("Todo Count: " + todos.length);
    assertEquals("Todo Count: 3", countElement.textContent);
  });

});