import React from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <TaskForm />
      <TaskList />
      <Footer />
      <About />
    </>
  );
}

export default App;
