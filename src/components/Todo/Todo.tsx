import Checkbox from "../Checkbox/Checkbox";
import IconCross from "../../Icons/IconCross";

import "./todo.scss";

export default function Todo() {
  return (
    <li
      className="todo-wrapper"
      draggable
    >
      <Checkbox labelText="complete online JavaScript course" />
      <button
        type="button"
        aria-label="Delete this task"
      >
        <IconCross />
      </button>
    </li>
  );
}
