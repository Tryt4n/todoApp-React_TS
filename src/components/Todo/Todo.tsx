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
  dragOverIndex: number;
  setDragOverIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function Todo({ todo, dragOverIndex, setDragOverIndex }: TodoPropsType) {
  const { dispatch } = useTodos();

  function handleDragStart(e: React.DragEvent<HTMLLIElement>) {
    e.dataTransfer.setData("text/plain", todo.id.toString());
    e.currentTarget.classList.remove("drag-over");
  }

  function handleDragOver(e: React.DragEvent<HTMLLIElement>) {
    e.preventDefault();
    setDragOverIndex(todo.id);
    // e.currentTarget.classList.add("drag-over");
  }

  function handleDragLeave() {
    setDragOverIndex(-1);
    // e.currentTarget.classList.remove("drag-over");
  }

  return (
    <li
      // className="todo-wrapper"
      className={`todo-wrapper${dragOverIndex === todo.id ? " drag-over" : ""}`}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
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
