import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import TaskCard from "./TaskCard";

function TaskList() {
  const { taskList, lightMode } = useContext(Context);
  return (
    <div className={`tasks-container container-${lightMode}`}>
      <ul className="task-list">
        {taskList.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
