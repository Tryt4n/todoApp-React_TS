import { ReactElement } from "react";
import { TodosListType } from "../types/TodosTypes";
import { ReducerActionType } from "../types/ActionsTypes";

export type ChildrenType = { children?: ReactElement | ReactElement[] };

export type DisplayedTodos = "all" | "active" | "completed";

export type TodosContextType = {
  todos: TodosListType;
  dispatch: React.Dispatch<ReducerActionType>;
  displayedTodos: DisplayedTodos;
  setDisplayedTodos: React.Dispatch<React.SetStateAction<DisplayedTodos>>;
  filteredTodos: TodosListType;
};
