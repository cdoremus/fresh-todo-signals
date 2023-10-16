import { assertEquals, assertExists } from "$std/assert/mod.ts";
import { cleanup, render, setup, userEvent } from "$fresh-testing-library/components.ts";
import { afterEach, beforeAll, describe, it } from "$std/testing/bdd.ts";
import state from "../state.ts";
import { AppState } from "../islands/App.tsx";
import Todo from "../islands/Todo.tsx";

describe("Todo.tsx test", () => {
  beforeAll(setup);
  afterEach(cleanup);

  it("should display todo...", () => {
    const text = "Foo";
    const { getByText } = render(<Todo text={text} index={1}/>);
    const textElement = getByText(text);
    assertExists(textElement);
    assertEquals(textElement.textContent, text);
  })

  it("should delete todo...", async () => {
    const user = userEvent.setup();
    const text = "Bar";
    // dummy event, not used in function
    const ev = new Event("foobar");
    // update current todo
    state.currentTodo.value = "Foo";
    state.addTodo(ev);
    const { getByRole } = render(
      <AppState.Provider value={state}>
        <Todo text={text} index={0}/>
      </AppState.Provider>
    );
    const button = getByRole("button");
    // remove current todo
    await user.click(button);
    assertEquals(state.todos.value.length, 0)
  })

});