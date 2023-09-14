// Hooks
import { useTodos } from "../../hooks/useTodos";

// Types
import { DisplayedTodosOptions } from "../../context/ContextTypes";

// Styles
import "./navigationBar.scss";

export default function NavigationBar() {
  const { displayedTodosOption, setDisplayedTodosOption } = useTodos();

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
          disabled={displayedTodosOption === button.value}
          className={displayedTodosOption === button.value ? "active" : ""}
          onClick={() => setDisplayedTodosOption(button.value as DisplayedTodosOptions)}
        >
          {button.label}
        </button>
      ))}
    </nav>
  );
}
