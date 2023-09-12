// import React, { ReactElement, useId, useState } from "react";
// import { ReactSortable } from "react-sortablejs";

import Todo from "../Todo/Todo";

import "./todoList.scss";

// Types
import { TodoType, TodosListType } from "../../types/Todos";

// interface ItemType {
//   id: string;
//   component: ReactElement;
// }
type TodoListPropsType = {
  todos: TodosListType;
  // dispatch: () => void;
};

export default function TodoList({ todos, dispatch }: TodoListPropsType) {
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
            dispatch={dispatch}
          ></Todo>
        ))}
      </ul>
      {/* </ReactSortable> */}
    </div>
  );
}
