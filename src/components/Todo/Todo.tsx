import Checkbox from "../Checkbox/Checkbox";
import IconCross from "../../Icons/IconCross";

import "./todo.scss";

//Types
import { TodoType } from "../../types/Todos";
import { ACTIONS_TYPE } from "../../types/Actions";
type propType = {
  todo: TodoType;
};

export default function Todo({ todo, dispatch }: propType) {
  return (
    <li
      className="todo-wrapper"
      draggable
    >
      <Checkbox
        todo={todo}
        dispatch={dispatch}
      />
      <button
        type="button"
        aria-label="Delete this task"
        onClick={() => dispatch({ type: ACTIONS_TYPE.DELETE_TODO, payload: { id: todo.id } })}
      >
        <IconCross />
      </button>
    </li>
  );
}
