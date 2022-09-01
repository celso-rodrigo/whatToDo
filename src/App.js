import React from "react";
import TaskForm from "./Components/TaskForm";

function App() {
  return (
    <>
      <TaskForm />
      <div className="tasks-container" />
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
