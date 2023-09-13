// Hooks
import { useId } from "react";
import { useTodos } from "../../hooks/useTodos";

// Types
import { TodoType } from "../../types/TodosTypes";
import { ACTIONS_TYPE } from "../../types/ActionsTypes";

// Styles
import "./checkbox.scss";

type CheckboxPropsType = {
  todo: TodoType;
};

export default function Checkbox({ todo }: CheckboxPropsType) {
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
