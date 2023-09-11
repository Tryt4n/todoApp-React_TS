import Todo from "../Todo/Todo";

import "./todoList.scss";

export default function TodoList() {
  return (
    <ul className="task-wrapper todo-list">
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </ul>
  );
}
