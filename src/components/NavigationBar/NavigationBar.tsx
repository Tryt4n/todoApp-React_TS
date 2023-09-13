// Hooks
import { useTodos } from "../../hooks/useTodos";

// Types
import { DisplayedTodos } from "../../context/ContextTypes";

// Styles
import "./navigationBar.scss";

export default function NavigationBar() {
  const { displayedTodos, setDisplayedTodos } = useTodos();

  const buttons = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <nav className="task-wrapper todos-navigation">
      {buttons.map((button) => (
        <button
          key={button.value}
          disabled={displayedTodos === button.value}
          className={displayedTodos === button.value ? "active" : ""}
          onClick={() => setDisplayedTodos(button.value as DisplayedTodos)}
        >
          {button.label}
        </button>
      ))}
    </nav>
  );
}
