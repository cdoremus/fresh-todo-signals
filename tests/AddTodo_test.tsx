import { Signal, signal } from "@preact/signals";
import { assert, assertEquals, assertExists, assertFalse, assertStringIncludes } from "$std/testing/asserts.ts";
import { cleanup, fireEvent, render, setup } from "$fresh-testing-library";
import { afterEach, beforeAll, describe, it } from "$std/testing/bdd.ts";
import { createContext } from "preact";
import state, { type AppStateType } from "../state.ts";
import AddTodo from "../islands/AddTodo.tsx"

// create the AppState context
const AppState = createContext<AppStateType>({} as AppStateType);

describe("AddTodo.tsx test", () => {
  beforeAll(setup);
  afterEach(cleanup);
  it("should add todo...", () => {
    const screen = render(
      <AppState.Provider value={state}>
        <AddTodo />
      </AppState.Provider>
    );
    const input = screen.getByLabelText("Add todo:");
    // console.log("input ", input);
    const newTodo = "First todo";
    fireEvent.change(input, { value: newTodo });
    assertEquals(state.currentTodo.value, newTodo);
  })
});