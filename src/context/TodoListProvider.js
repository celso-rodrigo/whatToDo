import React, { useState, useEffect } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

function TodoListProvider({ children }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [idControl, setIdControl] = useState(0);
  const [confirmClear, setConfirmClear] = useState(false);

  useEffect(() => {
    updateIdController();
  }, []);

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
    if (tasks.length) {
			const highId = tasks.reduce((prev, curr) => (prev.id > curr.id ? prev : curr)).id;
      setIdControl(highId + 1);
    }
  };

  const addTask = (task, date) => {
    const taskObj = { task, date, id: idControl };
    saveOnLocalStorage("taskList", taskObj);
    clearTaskInputs();
    updateIdController();
  };

  const providerValue = {
    confirmClear,
    task,
    date,
    setConfirmClear,
    setTask,
    setDate,
    addTask,
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
