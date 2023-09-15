import { assert, assertExists } from "$std/assert/mod.ts";
import { cleanup, render, setup } from "$fresh-testing-library";
import { afterEach, beforeAll, describe, it } from "$std/testing/bdd.ts";
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
