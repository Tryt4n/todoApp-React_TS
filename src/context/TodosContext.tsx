// Hooks
import { ReactElement, createContext, useEffect, useReducer, useState } from "react";

// Types
import { ChildrenType, DisplayedTodos, TodosContextType } from "./ContextTypes";
import { ACTIONS_TYPE, ReducerActionType } from "../types/ActionsTypes";
import { TodoType, TodosListType } from "../types/TodosTypes";

function newTodo(name: string, complete: boolean): TodoType {
  return { id: Date.now(), name: name, complete: complete };
}

function reducer(todos: TodosListType, action: ReducerActionType) {
  const { type, payload } = action;

  let sourceIndex;

  switch (type) {
    case ACTIONS_TYPE.ADD_TODO:
      if (payload.name.trim() === "") return todos;
      return [newTodo(payload.name, payload.complete), ...todos];

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

    case ACTIONS_TYPE.MOVE_TODO:
      sourceIndex = todos.findIndex((todo) => todo.id === payload.id);

      if (sourceIndex !== -1) {
        const updatedTodos = [...todos];
        const [movedTodo] = updatedTodos.splice(sourceIndex, 1);

        updatedTodos.splice(payload.newIndex, 0, movedTodo);
        return updatedTodos;
      }
      return todos;

    default:
      return todos;
  }
}

const TodosContext = createContext<TodosContextType | undefined>(undefined);

export function TodosProvider({ children }: ChildrenType): ReactElement {
  const [todos, dispatch] = useReducer(reducer, [], () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [displayedTodos, setDisplayedTodos] = useState<DisplayedTodos>("all");

  const filteredTodos = todos.filter((todo) => {
    if (displayedTodos === "all") {
      return true;
    } else if (displayedTodos === "active") {
      return !todo.complete;
    } else if (displayedTodos === "completed") {
      return todo.complete;
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos: todos,
        dispatch: dispatch,
        displayedTodos: displayedTodos,
        setDisplayedTodos: setDisplayedTodos,
        filteredTodos: filteredTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export default TodosContext;
