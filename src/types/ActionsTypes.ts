export const ACTIONS_TYPE = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete",
  CLEAR_COMPLETED_TODOS: "clear-completed",
};

export type ReducerActionType = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};
