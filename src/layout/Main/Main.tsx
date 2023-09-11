import useWindowSize from "../../hooks/useWindowSize.js";

import Checkbox from "../../components/Checkbox/Checkbox";
import TodoList from "../../components/TodoList/TodoList";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

import "./main.scss";

export default function Main() {
  const { width } = useWindowSize();

  return (
    <main className="container">
      <form
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <fieldset>
          <legend className="visually-hidden">Typing Field</legend>

          <div className="flex-wrapper task-wrapper typing-field-wrapper">
            <Checkbox
              labelText="Check status for new todo"
              labelHidden
            />
            <div className="typing-field-wrapper__text-input-wrapper">
              <label
                htmlFor="typing-text-input"
                className="visually-hidden"
              >
                Create a new todo...
              </label>
              <input
                type="text"
                name="typing-text-input"
                id="typing-text-input"
                className="new-todo-input-text"
                placeholder="Create a new todo..."
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="visually-hidden">Todos Field</legend>
          <TodoList />
        </fieldset>
      </form>
      <section className="task-wrapper list-last-element">
        <span>5 items left</span>
        {width > 768 && <NavigationBar />}
        <button type="button">Clear Completed</button>
      </section>
      {width <= 768 && <NavigationBar />}

      <p className="reorder-text">Drag and drop to reorder list</p>
    </main>
  );
}
