import { Signal, signal } from "@preact/signals";
import { assert, assertEquals, assertExists, assertFalse, assertStringIncludes } from "$std/testing/asserts.ts";
import { cleanup, fireEvent, render, setup } from "$fresh-testing-library";
import { afterEach, beforeAll, describe, it } from "$std/testing/bdd.ts";
import { createContext } from "preact";
import state, { type AppStateType } from "../state.ts";
import Counter from "../islands/Counter.tsx";

describe("Counter.tsx tests", () => {
  beforeAll(setup);
  afterEach(cleanup);
  // it("Counter.tsx test ...", () => {
  //   state.currentTodo = signal("Todo1");

  //   console.log("state", state);
  // })

  it("should display count", () => {
    window.localStorage.setItem("COUNT", "10");
    const screen = render(<Counter />);
    const countElement = screen.getByText("Count: 10");
    assertExists(countElement);
    assertEquals("Count: 10", countElement.textContent);
  })

  it("should display count squared", () => {
    window.localStorage.setItem("COUNT", "9");
    const screen = render(<Counter />);
    const countElement = screen.getByText("Count Squared: 81");
    assertExists(countElement);
    assertEquals("Count Squared: 81", countElement.textContent);
  })

})