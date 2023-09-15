// button.test.tsx
import { assert, assertEquals, assertExists, assertStringIncludes } from "$std/assert/mod.ts";
import { cleanup, fireEvent, render, setup } from "$fresh-testing-library";
import { afterEach, beforeAll, describe, it } from "$std/testing/bdd.ts";
import state, { type AppStateType } from "../state.ts";
import { AppState } from "../islands/App.tsx";
import { Button } from "../components/Button.tsx";

describe("Button.tsx test", () => {
  beforeAll(setup);
  afterEach(cleanup);

  it("should be disabled...", () => {
    const screen = render(<Button disabled/>);
    const textElement = screen.getByRole("button");
    assertExists(textElement);
    assert((textElement as HTMLButtonElement).disabled === true)
  })

  it("should not be disabled...", () => {
    const screen = render(<Button/>);
    const textElement = screen.getByRole("button");
    assertExists(textElement);
    assert((textElement as HTMLButtonElement).disabled === false)
  })


  it("should contain touch action style", () => {
    const screen = render(<Button disabled/>);
    const textElement = screen.getByRole("button");
    assertExists(textElement);
    assert((textElement as HTMLButtonElement).style.touchAction === 'manipulation');
  })

  it("should contain border class", () => {
    const screen = render(<Button disabled/>);
    const textElement = screen.getByRole("button");
    assertExists(textElement);
    assert((textElement as HTMLButtonElement).classList.contains("border"));
  })

})
