import { assertEquals } from "$std/assert/mod.ts";
import { cleanup, fireEvent, render, setup } from "$fresh-testing-library";
import { afterEach, beforeAll, describe, it } from "$std/testing/bdd.ts";
import state from "../state.ts";
import { AppState } from "../islands/App.tsx";
import AddTodo from "../islands/AddTodo.tsx"

describe("AddTodo.tsx test", () => {
  beforeAll(setup);
  afterEach(cleanup);

  it("should add todo...", () => {
    const todo = "Current todo1";
    state.currentTodo.value = todo;
    const screen = render(
      <AppState.Provider value={state}>
        <AddTodo />
      </AppState.Provider>
    );
    const input = screen.getByLabelText("Add todo:");
    const val = (input as HTMLInputElement).value;
    // assert current todo value is input value
    assertEquals(val, todo);
    const newVal = "New value";
    (input as HTMLInputElement).value = newVal;
    fireEvent.change(input);
    assertEquals(state.currentTodo.value, newVal);
  })
});