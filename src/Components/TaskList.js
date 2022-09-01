import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import TaskCard from "./TaskCard";

function TaskList() {
  const { taskList } = useContext(Context);
  return (
    <div className="tasks-container">
      <ul>
        {taskList.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
