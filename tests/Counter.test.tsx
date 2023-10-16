import { assertEquals, assertExists } from "$std/assert/mod.ts";
import { cleanup, fireEvent, render, setup } from "$fresh-testing-library/components.ts";
import { afterEach, beforeAll, describe, it } from "$std/testing/bdd.ts";
import Counter from "../islands/Counter.tsx";

describe("Counter.tsx tests", () => {
  beforeAll(setup);
  afterEach(cleanup);

  it("should display count and count squared", async () => {
    const { queryByText, debug, getByRole } = render(<Counter />);
    // debug();
    const increment = getByRole("button", {name: "Increment Count"});
    // increment twice
    await fireEvent.click(increment);
    await fireEvent.click(increment);
    const countElement = queryByText("Count: 2");
    assertExists(countElement);
    assertEquals("Count: 2", countElement.textContent);
    const countElement2 = queryByText("Count Squared: 4");
    assertExists(countElement2);
    assertEquals("Count Squared: 4", countElement2.textContent);
  });

  it("should reset count", async () => {
    const { queryByText, getByRole } = render(<Counter />);
    const increment = getByRole("button", {name: "Increment Count"});
    await fireEvent.click(increment);
    await fireEvent.click(increment);
    const countElement = queryByText("Count: 2");
    assertExists(countElement);
    assertEquals("Count: 2", countElement.textContent);
    const reset = getByRole("button", {name: "Reset Count"});
    // reset count
    await fireEvent.click(reset);
    const countElement0 = queryByText("Count: 0");
    assertExists(countElement0);
    assertEquals("Count: 0", countElement0.textContent);

  });
});