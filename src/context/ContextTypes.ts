import { ReactElement } from "react";
import { TodosListType } from "../types/TodosTypes";
import { ReducerActionType } from "../types/ActionsTypes";

export type ChildrenType = { children?: ReactElement | ReactElement[] };

export type DisplayedTodosOptions = "all" | "active" | "completed";

export type TodosContextType = {
  todos: TodosListType;
  dispatch: React.Dispatch<ReducerActionType>;
  displayedTodosOption: DisplayedTodosOptions;
  setDisplayedTodosOption: React.Dispatch<React.SetStateAction<DisplayedTodosOptions>>;
};
