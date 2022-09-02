import React, { useContext } from "react";
import Context from "../context/Context";
import pinIcon from "../images/pinIcon.svg";
import lightIcon from "../images/lightIcon.svg";
import questionIcon from "../images/questionIcon.svg";
import trashAllIcon from "../images/trashAllIcon.svg";
import doneIcon from "../images/doneIcon.svg";
import closeIcon from "../images/closeIcon.svg";
import "../styles/global.css";

function TaskForm() {
  const {
    confirmClear,
    task,
    date,
    setConfirmClear,
    setTask,
    setDate,
    addTask,
    lightMode,
    setTaskList,
    showAbout,
    setShowAbout,
    setLightMode,
  } = useContext(Context);

  const deleteTaskList = () => {
    localStorage.setItem("taskList", JSON.stringify([]));
    setTaskList([]);
    setConfirmClear(!confirmClear);
  };

  return (
    <form className={`task-form ${lightMode}`}>
      <div className={`main-container ${lightMode}`}>
        <input
          type="text"
          className="task-input"
          value={task}
          placeholder="I can't forget about..."
          onChange={({ target }) => setTask(target.value)}
          maxLength="160"
        />
        <input
          type="date"
          className="date-input"
          value={date}
          onChange={({ target }) => setDate(target.value)}
        />
        <button
          type="button"
          onClick={() => addTask(task, date)}
          disabled={!task.length}
        >
          <img src={pinIcon} alt="Save task button." />
        </button>
        {confirmClear ? (
          <div className="confirmation-buttons">
            <button type="button" onClick={deleteTaskList}>
              <img src={doneIcon} alt="Confirm clear all tasks button." />
            </button>
            <button
              type="button"
              onClick={() => setConfirmClear(!confirmClear)}
            >
              <img src={closeIcon} alt="Cancel clear all tasks button." />
            </button>
          </div>
        ) : (
          <button
            className="clear-all-tasks"
            type="button"
            onClick={() => setConfirmClear(!confirmClear)}
          >
            <img src={trashAllIcon} alt="Clear all tasks button." />
          </button>
        )}
      </div>
      <div className="secundary-container">
        <button type="button">
          <img
            src={questionIcon}
            alt="About button."
            onClick={() => setShowAbout(!showAbout)}
          />
        </button>
        <button
          type="button"
          onClick={() => setLightMode(lightMode === "light" ? "dark" : "light")}
        >
          <img src={lightIcon} alt="Toggle light/dark mode." />
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
