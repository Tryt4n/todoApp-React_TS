// Hooks
import { useId } from "react";
import { useTodos } from "../../hooks/useTodos";

// Types
import { TodoPropType } from "../../types/TodosTypes";
import { ACTIONS_TYPE } from "../../types/ActionsTypes";

// Styles
import "./checkbox.scss";

export default function Checkbox({ todo }: TodoPropType) {
  const { dispatch } = useTodos();
  const id = useId();

  return (
    <div className="flex-wrapper">
      <input
        type="checkbox"
        name={`checkbox-${id}`}
        id={`checkbox-${id}`}
        className="todo-input-checkbox"
        checked={todo.complete}
        onChange={() => dispatch({ type: ACTIONS_TYPE.TOGGLE_TODO, payload: { id: todo.id } })}
      />
      <label
        htmlFor={`checkbox-${id}`}
        className="todo-checkbox-label"
      >
        {todo ? todo.name : "Check status for new todo"}
      </label>
    </div>
  );
}
