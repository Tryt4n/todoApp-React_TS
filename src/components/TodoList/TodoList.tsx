// Hooks
import { useState } from "react";
// import { useState } from "react";
import { useTodos } from "../../hooks/useTodos";

// Components
import Todo from "../Todo/Todo";

// Types
import { TodoType } from "../../types/TodosTypes";
import { ACTIONS_TYPE } from "../../types/ActionsTypes";

// Styles
import "./todoList.scss";

export default function TodoList() {
  const { todos, dispatch, filteredTodos } = useTodos();

  const [dragOverIndex, setDragOverIndex] = useState(-1);

  function handleDrop(e: React.DragEvent<HTMLUListElement>) {
    e.preventDefault();
    const draggedItemId = parseInt(e.dataTransfer.getData("text/plain"), 10);

    const mouseY = e.clientY;
    const todoList = e.currentTarget;
    const rect = todoList.getBoundingClientRect();
    const mouseYRelativeToTodoList = mouseY - rect.top;

    const newIndex = Math.floor(mouseYRelativeToTodoList / (rect.height / todos.length));

    dispatch({
      type: ACTIONS_TYPE.MOVE_TODO,
      payload: {
        id: draggedItemId,
        newIndex: newIndex,
      },
    });
  }

  return (
    <div className="todo-list-wrapper">
      <ul
        className="task-wrapper todo-list"
        onDrop={handleDrop}
      >
        {filteredTodos.map((todo: TodoType) => (
          <Todo
            key={todo.id}
            todo={todo}
            dragOverIndex={dragOverIndex}
            setDragOverIndex={setDragOverIndex}
          />
        ))}
      </ul>
    </div>
  );
}
