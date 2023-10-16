import { assert } from "$std/assert/mod.ts";
import { cleanup, render, setup } from "$fresh-testing-library/components.ts";
import { afterEach, beforeAll, describe, it } from "$std/testing/bdd.ts";
import { Button } from "../components/Button.tsx";

describe("Button.tsx test", () => {
  beforeAll(setup);
  afterEach(cleanup);

  it("should be disabled...", () => {
    const {getByRole} = render(<Button disabled/>);
    const textElement = getByRole("button");
    assert((textElement as HTMLButtonElement).disabled === true)
  });

  it("should not be disabled...", () => {
    const { getByRole } = render(<Button/>);
    const textElement = getByRole("button");
    assert((textElement as HTMLButtonElement).disabled === false)
  });

  it("should contain touch action style", () => {
    const { getByRole } = render(<Button disabled/>);
    const textElement = getByRole("button");
    assert((textElement as HTMLButtonElement).style.touchAction === 'manipulation');
  });

  it("should contain border class", () => {
    const { getByRole } = render(<Button disabled/>);
    const textElement = getByRole("button");
    assert((textElement as HTMLButtonElement).classList.contains("border"));
  });

})
