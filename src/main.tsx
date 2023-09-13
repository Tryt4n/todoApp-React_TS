import React from "react";
import ReactDOM from "react-dom/client";

import { TodosProvider } from "./context/TodosContext.tsx";

import App from "./App.tsx";

import "./style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>
);
