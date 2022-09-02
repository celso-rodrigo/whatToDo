import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import upIcon from "../images/upIcon.svg";
import downIcon from "../images/downIcon.svg";
import editIcon from "../images/editIcon.svg";
import doneIcon from "../images/doneIcon.svg";
import trashIcon from "../images/trashIcon.svg";
import Context from "../context/Context";

function TaskCard({ task }) {
  const [done, setDone] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);
  const [editedDate, setEditedDate] = useState(task.date);

  const { taskList, loadTaskList, lightMode } = useContext(Context);

  const removeTask = (currTask) => {
    const filteredTask = taskList.filter((task) => task !== currTask);
    localStorage.setItem("taskList", JSON.stringify(filteredTask));
    loadTaskList();
  };

  const treatDate = (date) => {
    return date.length
      ? date.replace(/(\d{4})\-(\d{2})\-(\d{2})/, "$3/$2/$1")
      : "----------";
  };

  const handleEdit = (currTask) => {
    const newTaskObj = {
      task: editedTask,
      date: editedDate || "----------",
      id: task.id,
    };
    const newTaskArr = taskList.map((task) =>
      task !== currTask ? task : newTaskObj
    );
    setEditing(false);
    localStorage.setItem("taskList", JSON.stringify(newTaskArr));
    loadTaskList();
  };

  const handleReOrder = (currTask, movement) => {
    const move = movement === "up" ? -1 : 1;
    const currIndex = taskList.indexOf(currTask);
    const newIdex = currIndex === 0 && movement === "up" ? 0 : currIndex + move;
    const filteredArr = taskList.filter((task) => task !== currTask);
    filteredArr.splice(newIdex, 0, currTask);
    localStorage.setItem("taskList", JSON.stringify(filteredArr));
    loadTaskList();
  };

  return (
    <li className={`task-card task-card-${lightMode}`}>
      {editing ? (
        <input
          type="text"
          maxLength="130"
          className="task-edit"
          value={editedTask}
          onChange={({ target }) => setEditedTask(target.value)}
        />
      ) : (
        <p
          className={`task ${lightMode} ${done ? "done-task" : ""}`}
          onClick={() => setDone(!done)}
        >
          {task.task}
        </p>
      )}

      {editing ? (
        <input
          type="date"
          className="date-edit"
          value={editedDate}
          onChange={({ target }) => setEditedDate(target.value)}
          />
      ) : (
        <p className={`${lightMode} date`}>{treatDate(task.date)}</p>
      )}
      <div className={"buttons"}>
        <div className="group-one">
          <button
            type="button"
            disabled={editing}
            onClick={() => handleReOrder(task, "up")}
            title="Move task up"
          >
            <img src={upIcon} alt="Move task up button." />
          </button>
          <button
            type="button"
            disabled={editing}
            onClick={() => handleReOrder(task, "down")}
            title="Move task down"
            className="move-task"
          >
            <img src={downIcon} alt="Move task down button."></img>
          </button>
        </div>
        <div className="group-two">
          {editing ? (
            <button
              onClick={() => handleEdit(task)}
              title="Finish editing task."
              className="edit-task"
            >
              <img src={editIcon} alt="Edit task button."></img>
            </button>
          ) : (
            <button
              onClick={() => setEditing(!editing)}
              title="Edit task."
              className="edit-task"
            >
              <img src={editIcon} alt="Edit task button."></img>
            </button>
          )}
          <button
            type="button"
            disabled={editing}
            title="Mark task as compleated."
            className="compleat-task"
          >
            <img
              src={doneIcon}
              alt="Mark as compleat task button."
              onClick={() => setDone(!done)}
            ></img>
          </button>
          <button type="button" title="Delete task." className="delete-task">
            <img
              src={trashIcon}
              alt="delete task button."
              onClick={() => removeTask(task)}
            ></img>
          </button>
        </div>
      </div>
    </li>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    task: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    date: PropTypes.string,
  }),
};

export default TaskCard;
