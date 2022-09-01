import React from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <>
      <TaskForm />
      <TaskList />
      <footer>
        <p>
          {"Created By "}
          <a
            target="_black"
            href="https://www.linkedin.com/in/celso-rodrigo-monteiro-de-assis-419a371aa/"
          >
            Celso Rodrigo
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
