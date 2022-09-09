import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TodoListProvider from "./context/TodoListProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoListProvider>
    <App />
  </TodoListProvider>
);

reportWebVitals();
