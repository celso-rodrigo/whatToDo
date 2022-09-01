import React, { useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

function TodoListProvider({ children }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [confirmClear, setConfirmClear] = useState(false);

  const providerValue = {
    confirmClear,
    task,
    date,
    setConfirmClear,
    setTask,
    setDate,
  };

  return (
    <Context.Provider value={providerValue}>{children}</Context.Provider>
  );
}

TodoListProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TodoListProvider;
