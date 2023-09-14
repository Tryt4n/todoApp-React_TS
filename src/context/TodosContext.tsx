// Hooks
import { ReactElement, createContext, useEffect, useReducer, useState } from "react";

// Types
import { ChildrenType, DisplayedTodosOptions, TodosContextType } from "./ContextTypes";
import { ACTIONS_TYPE, ReducerActionType } from "../types/ActionsTypes";
import { TodoType, TodosListType } from "../types/TodosTypes";

function newTodo(name: string, complete: boolean): TodoType {
  return { id: Date.now(), name: name, complete: complete };
}

function reducer(todos: TodosListType, action: ReducerActionType) {
  const { type, payload } = action;
  const getTodos: TodosListType = getInitialTodos();

  switch (type) {
    case ACTIONS_TYPE.ADD_TODO:
      if (payload.name.trim() === "") return todos;
      return [newTodo(payload.name, payload.complete), ...todos];

    case ACTIONS_TYPE.TOGGLE_TODO:
      return getTodos.map((todo) => {
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

const TodosContext = createContext<TodosContextType | undefined>(undefined);

function getInitialTodos() {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
}

export function TodosProvider({ children }: ChildrenType): ReactElement {
  const [todos, dispatch] = useReducer(reducer, getInitialTodos());

  const [displayedTodosOption, setDisplayedTodosOption] = useState<DisplayedTodosOptions>("all");

  const activeTodos = todos.filter((todo) => !todo.complete);
  const completedTodos = todos.filter((todo) => todo.complete);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("activeTodos", JSON.stringify(activeTodos));
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  const contextValue: TodosContextType = {
    todos,
    dispatch,
    displayedTodosOption,
    setDisplayedTodosOption,
  };

  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
}

export default TodosContext;
