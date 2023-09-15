import { assertEquals, assertExists } from "$std/assert/mod.ts";
import { cleanup, render, setup } from "$fresh-testing-library";
import { afterEach, beforeAll, describe, it } from "$std/testing/bdd.ts";
import Counter from "../islands/Counter.tsx";

describe("Counter.tsx tests", () => {
  beforeAll(setup);
  afterEach(cleanup);

  it("should display count", () => {
    window.localStorage.setItem("COUNT", "10");
    const screen = render(<Counter />);
    const countElement = screen.getByText("Count: 10");
    assertExists(countElement);
    assertEquals("Count: 10", countElement.textContent);
  });

  it("should display count squared", () => {
    window.localStorage.setItem("COUNT", "9");
    const screen = render(<Counter />);
    const countElement = screen.getByText("Count Squared: 81");
    assertExists(countElement);
    assertEquals("Count Squared: 81", countElement.textContent);
  });

});