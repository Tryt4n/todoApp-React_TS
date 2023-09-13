// Hooks
import { useRef } from "react";
import { useTodos } from "../../hooks/useTodos.js";
import useWindowSize from "../../hooks/useWindowSize.js";

// Components
import TodoList from "../../components/TodoList/TodoList.js";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";

// Types
import { ACTIONS_TYPE } from "../../types/ActionsTypes.js";

// Styles
import "./mainSection.scss";

export default function MainSection() {
  const { todos, dispatch, displayedTodos } = useTodos();

  const { width } = useWindowSize();

  const inputRef = useRef<HTMLInputElement>(null!);
  const newTodoCheckboxRef = useRef<HTMLInputElement>(null!);

  const completedTodos = todos.filter((todo) => todo.complete);
  const numberOfTodosLeft = todos.length - completedTodos.length;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch({
      type: ACTIONS_TYPE.ADD_TODO,
      payload: { name: inputRef.current.value, complete: newTodoCheckboxRef.current.checked },
    });

    inputRef.current.value = "";
    newTodoCheckboxRef.current.checked = false;
  }

  return (
    <main className="container">
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <fieldset>
          <legend className="visually-hidden">Typing Field</legend>

          <div className="flex-wrapper task-wrapper typing-field-wrapper">
            <input
              type="checkbox"
              name="new-todo-checkbox"
              id="new-todo-checkbox"
              className="todo-input-checkbox"
              ref={newTodoCheckboxRef}
            />
            <label
              htmlFor="new-todo-checkbox"
              className="todo-checkbox-label"
            >
              Check status for new todo
            </label>

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
                ref={inputRef}
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="visually-hidden">Todos Field</legend>
          <TodoList />
        </fieldset>
      </form>

      <section className="task-wrapper list-summary">
        <span>
          {numberOfTodosLeft} {numberOfTodosLeft === 1 ? "item" : "items"} left
        </span>
        {width > 768 && <NavigationBar />}
        <button
          type="button"
          disabled={displayedTodos === "active"}
          onClick={() => {
            if (displayedTodos === "active") return;
            dispatch({
              type: ACTIONS_TYPE.CLEAR_COMPLETED_TODOS,
            });
          }}
        >
          Clear Completed
        </button>
      </section>
      {width <= 768 && <NavigationBar />}

      <p className="reorder-text">Drag and drop to reorder list</p>
    </main>
  );
}
