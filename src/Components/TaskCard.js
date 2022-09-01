import React from "react";
import PropTypes from "prop-types";
import upIcon from "../images/upIcon.svg";
import downIcon from "../images/downIcon.svg";
import editIcon from "../images/editIcon.svg";
import doneIcon from "../images/doneIcon.svg";
import trashIcon from "../images/trashIcon.svg";

function TaskCard({ task }) {
  return (
    <li className="task-card">
      <p className="task">{task.task}</p>
      <p className="date">{task.date}</p>
      <div className="buttons">
        <div className="group-one">
          <button>
            <img src={upIcon} alt="Move task up button."></img>
          </button>
          <button>
            <img src={downIcon} alt="Move task down button."></img>
          </button>
        </div>
        <div className="group-two">
          <button>
            <img src={editIcon} alt="Edit task button."></img>
          </button>
          <button>
            <img src={doneIcon} alt="Mark as compleat task button."></img>
          </button>
          <button>
            <img src={trashIcon} alt="delete task button."></img>
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
