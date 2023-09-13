// Hooks
import { useTodos } from "../../hooks/useTodos";
// import React, { ReactElement, useId, useState } from "react";
// import { ReactSortable } from "react-sortablejs";

// Components
import Todo from "../Todo/Todo";

// Types
// import { TodoType, TodosListType } from "../../types/Todos";
import { TodoType } from "../../types/TodosTypes";

// Styles
import "./todoList.scss";

// interface ItemType {
//   id: string;
//   component: ReactElement;
// }

export default function TodoList() {
  const { todos } = useTodos();
  // const id = useId();
  // const [state, setState] = useState<ItemType[]>([
  //   {
  //     id: `list-item-${id}`,
  //     component: <Todo text={crypto.randomUUID()} />,
  //   },
  //   {
  //     id: `list-item-${id}`,
  //     component: <Todo text={crypto.randomUUID()} />,
  //   },
  //   // {
  //   //   id: `list-item-${id}`,
  //   //   component: <Todo text={crypto.randomUUID()} />,
  //   // },
  //   // {
  //   //   id: `list-item-${id}`,
  //   //   component: <Todo text={crypto.randomUUID()} />,
  //   // },
  //   // {
  //   //   id: `list-item-${id}`,
  //   //   component: <Todo text={crypto.randomUUID()} />,
  //   // },
  //   // {
  //   //   id: `list-item-${id}`,
  //   //   component: <Todo text={crypto.randomUUID()} />,
  //   // },
  //   // {
  //   //   id: `list-item-${id}`,
  //   //   component: <Todo text={crypto.randomUUID()} />,
  //   // },
  //   // {
  //   //   id: `list-item-${id}`,
  //   //   component: <Todo text={crypto.randomUUID()} />,
  //   // },
  //   // {
  //   //   id: `list-item-${id}`,
  //   //   component: <Todo text={crypto.randomUUID()} />,
  //   // },
  //   // {
  //   //   id: `list-item-${id}`,
  //   //   component: <Todo text={crypto.randomUUID()} />,
  //   // },
  //   // {
  //   //   id: `list-item-${id}`,
  //   //   component: <Todo text={crypto.randomUUID()} />,
  //   // },
  //   // {
  //   //   id: `list-item-${id}`,
  //   //   component: <Todo text={crypto.randomUUID()} />,
  //   // },
  //   // {
  //   //   id: `list-item-${id}`,
  //   //   component: <Todo text={crypto.randomUUID()} />,
  //   // },
  // ]);

  return (
    <div className="todo-list-wrapper">
      {/* <ReactSortable
        tag="ul"
        className="task-wrapper todo-list"
        list={state}
        setList={setState}
      > */}
      {/* {state.map((item) => (
          <React.Fragment key={item.component.props.text}>{item.component}</React.Fragment>
        ))} */}
      <ul className="task-wrapper todo-list">
        {todos.map((todo: TodoType) => (
          <Todo
            key={todo.id}
            todo={todo}
          ></Todo>
        ))}
      </ul>
      {/* </ReactSortable> */}
    </div>
  );
}
