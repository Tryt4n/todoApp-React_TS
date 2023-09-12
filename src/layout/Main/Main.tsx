import { useEffect, useRef, useReducer } from "react";
import useWindowSize from "../../hooks/useWindowSize.js";

import Checkbox from "../../components/Checkbox/Checkbox";
import TodoList from "../../components/TodoList/TodoList";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

import "./main.scss";

// Types
import { TodoType, TodosListType } from "../../types/Todos.js";
import { ACTIONS_TYPE } from "../../types/Actions.js";

type ReducerActionType = {
  type: string;
  payload: TodoType;
  // payload?: any;
};

function newTodo(name: string): TodoType {
  return { id: Date.now(), name: name, complete: false };
}

function reducer(todos: TodosListType, action: ReducerActionType) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS_TYPE.ADD_TODO:
      return [newTodo(payload.name), ...todos];

    case ACTIONS_TYPE.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS_TYPE.DELETE_TODO:
      return todos.filter((todo) => todo.id !== payload.id);

    case ACTIONS_TYPE.CLEAR_COMPLETED_TODOS:
      return todos.filter((todo) => !todo.complete);

    default:
      return todos;
  }
}

export default function Main() {
  const { width } = useWindowSize();
  const inputRef = useRef<HTMLInputElement>(null!);

  // const [todos, dispatch] = useReducer(reducer, []);
  // Inicjalizacja stanu z localStorage przy pierwszym uruchomieniu
  const [todos, dispatch] = useReducer(reducer, [], () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch({
      type: ACTIONS_TYPE.ADD_TODO,
      payload: { name: inputRef.current.value },
    });

    inputRef.current.value = "";
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <main className="container">
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <fieldset>
          <legend className="visually-hidden">Typing Field</legend>

          <div className="flex-wrapper task-wrapper typing-field-wrapper">
            <Checkbox />
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
                ref={inputRef}
                className="new-todo-input-text"
                placeholder="Create a new todo..."
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="visually-hidden">Todos Field</legend>
          <TodoList
            todos={todos}
            dispatch={dispatch}
          />
        </fieldset>
      </form>

      <section className="task-wrapper list-summary">
        <span>5 items left</span>
        {width > 768 && <NavigationBar />}
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: ACTIONS_TYPE.CLEAR_COMPLETED_TODOS,
            })
          }
        >
          Clear Completed
        </button>
      </section>
      {width <= 768 && <NavigationBar />}

      <p className="reorder-text">Drag and drop to reorder list</p>
    </main>
  );
}
