// Hooks
import { useState, useEffect, useMemo } from "react";
import { useTodos } from "../../hooks/useTodos";

// Components
import { ReactSortable } from "react-sortablejs";
import Todo from "../Todo/Todo";

// Types
import { TodoType, TodosListType } from "../../types/TodosTypes";

// Styles
import "./todoList.scss";

export default function TodoList() {
  const { todos, displayedTodosOption } = useTodos();
  const [displayedTodoList, setDisplayedTodoList] = useState(todos);

  const LOCAL_STORAGE_KEYS = {
    ALL_TODOS: "todos",
    ACTIVE_TODOS: "activeTodos",
    COMPLETED_TODOS: "completedTodos",
  };

  const localStorageData = {
    allTodosData: localStorage.getItem(LOCAL_STORAGE_KEYS.ALL_TODOS),
    activeTodosData: localStorage.getItem(LOCAL_STORAGE_KEYS.ACTIVE_TODOS),
    completedTodosData: localStorage.getItem(LOCAL_STORAGE_KEYS.COMPLETED_TODOS),
  };

  const getAllTodos = useMemo(
    () => (localStorageData.allTodosData ? JSON.parse(localStorageData.allTodosData) : []),
    [localStorageData.allTodosData]
  );
  const getActiveTodos = useMemo(
    () => (localStorageData.activeTodosData ? JSON.parse(localStorageData.activeTodosData) : []),
    [localStorageData.activeTodosData]
  );
  const getCompletedTodos = useMemo(
    () =>
      localStorageData.completedTodosData ? JSON.parse(localStorageData.completedTodosData) : [],
    [localStorageData.completedTodosData]
  );

  useEffect(() => {
    let newDisplayedTodoList: TodosListType = [];

    if (displayedTodosOption === "all") {
      newDisplayedTodoList = getAllTodos;
    } else if (displayedTodosOption === "active") {
      newDisplayedTodoList = getActiveTodos;
    } else if (displayedTodosOption === "completed") {
      newDisplayedTodoList = getCompletedTodos;
    }

    setDisplayedTodoList(newDisplayedTodoList);
  }, [displayedTodosOption, getAllTodos, getActiveTodos, getCompletedTodos]);

  useEffect(() => {
    setDisplayedTodoList(todos);
  }, [todos]);

  function updateLocalStorage() {
    if (displayedTodosOption === "all") {
      localStorage.setItem("todos", JSON.stringify(displayedTodoList));
    } else if (displayedTodosOption === "active") {
      localStorage.setItem("activeTodos", JSON.stringify(displayedTodoList));
    } else if (displayedTodosOption === "completed") {
      localStorage.setItem("completedTodos", JSON.stringify(displayedTodoList));
    }
  }

  return (
    <div className="todo-list-wrapper">
      <ReactSortable
        tag="ul"
        className="task-wrapper todo-list"
        list={displayedTodoList}
        setList={setDisplayedTodoList}
      >
        {displayedTodoList.map((todo: TodoType) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDragFunction={updateLocalStorage}
          />
        ))}
      </ReactSortable>
    </div>
  );
}
