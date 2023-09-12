import { useId } from "react";

import "./checkbox.scss";

// Types
import { ACTIONS_TYPE } from "../../types/Actions";

export default function Checkbox({ todo, dispatch }) {
  const id = useId();

  return (
    <div className="flex-wrapper">
      <input
        type="checkbox"
        name={`checkbox-${id}`}
        id={`checkbox-${id}`}
        className="todo-input-checkbox"
        checked={todo?.complete}
        onChange={() => dispatch({ type: ACTIONS_TYPE.TOGGLE_TODO, payload: { id: todo.id } })}
      />
      <label
        htmlFor={`checkbox-${id}`}
        // className={labelHidden ? "visually-hidden" : ""}
        className="todo-checkbox-label"
      >
        {todo ? todo.name : "Check status for new todo"}
      </label>
    </div>
  );
}
