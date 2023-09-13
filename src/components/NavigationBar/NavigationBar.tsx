// Styles
import "./navigationBar.scss";

export default function NavigationBar() {
  return (
    <nav className="task-wrapper todos-navigation">
      <a
        href="#"
        className="active"
      >
        All
      </a>
      <a href="#">Active</a>
      <a href="#">Completed</a>
    </nav>
  );
}
