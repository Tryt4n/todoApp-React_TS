// Hooks
import { ReactElement, createContext, useEffect, useReducer } from "react";

// Types
import { ChildrenType, TodosContextType } from "./ContextTypes";
import { ACTIONS_TYPE, ReducerActionType } from "../types/ActionsTypes";
import { TodoType, TodosListType } from "../types/TodosTypes";

function newTodo(name: string, complete: boolean): TodoType {
  return { id: Date.now(), name: name, complete: complete };
}

function reducer(todos: TodosListType, action: ReducerActionType) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS_TYPE.ADD_TODO:
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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos: todos,
        dispatch: dispatch,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export default TodosContext;
