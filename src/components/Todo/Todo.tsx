import Checkbox from "../Checkbox/Checkbox";
import IconCross from "../../Icons/IconCross";

import "./todo.scss";

export default function Todo({ text }) {
  return (
    <li
      className="todo-wrapper"
      draggable
    >
      {/* <Checkbox labelText="complete online JavaScript course" /> */}
      <Checkbox labelText={text} />
      <button
        type="button"
        aria-label="Delete this task"
      >
        <IconCross />
      </button>
    </li>
  );
}
