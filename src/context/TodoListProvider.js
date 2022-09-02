import React, { useState, useEffect } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

function TodoListProvider({ children }) {
  const savedLightMode = localStorage.getItem("lightMode");
  const [lightMode, setLightMode] = useState(
    savedLightMode !== null ? savedLightMode : "light"
  );
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [idControl, setIdControl] = useState(0);
  const [confirmClear, setConfirmClear] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const loadTaskList = () => {
    const allTasks = localStorage.getItem("taskList");
    if (allTasks !== null) setTaskList(JSON.parse(allTasks));
  };

  const clearTaskInputs = () => {
    setDate("");
    setTask("");
  };

  const saveOnLocalStorage = (key, value) => {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify([value]));
    } else {
      const oldData = JSON.parse(localStorage.getItem(key));
      const newArray = JSON.stringify([...oldData, value]);
      localStorage.setItem(key, newArray);
    }
    setIdControl(idControl + 1);
  };

  const updateIdController = () => {
    const tasks = JSON.parse(localStorage.getItem("taskList"));
    if (tasks !== null && task.length) {
      const highId = tasks.reduce((prev, curr) =>
        prev.id > curr.id ? prev : curr
      ).id;
      setIdControl(highId + 1);
    }
  };

  const addTask = (task, date) => {
    const taskObj = { task, date, id: idControl };
    saveOnLocalStorage("taskList", taskObj);
    clearTaskInputs();
    updateIdController();
    loadTaskList();
  };

  useEffect(() => {
    updateIdController();
    loadTaskList();
  }, []);

  useEffect(() => {
    const changeBodyLightMode = () => {
      document.body.classList = lightMode;
      localStorage.setItem("lightMode", lightMode);
    };
    changeBodyLightMode();
  }, [lightMode]);

  const providerValue = {
    confirmClear,
    task,
    date,
    taskList,
    showAbout,
    lightMode,
    setLightMode,
    setShowAbout,
    setConfirmClear,
    setTask,
    setDate,
    addTask,
    setTaskList,
    loadTaskList,
  };

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

TodoListProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TodoListProvider;
