// Hooks
import { useTodos } from "../../hooks/useTodos";

// Components
import Checkbox from "../Checkbox/Checkbox";
import IconCross from "../../Icons/IconCross";

//Types
import { TodoType } from "../../types/TodosTypes";
import { ACTIONS_TYPE } from "../../types/ActionsTypes";

// Styles
import "./todo.scss";

type TodoPropsType = {
  todo: TodoType;
  onDragFunction: () => void;
};

export default function Todo({ todo, onDragFunction }: TodoPropsType) {
  const { dispatch } = useTodos();

  return (
    <li
      className="todo-wrapper"
      draggable
      onDragEnd={onDragFunction}
    >
      <Checkbox todo={todo} />
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
