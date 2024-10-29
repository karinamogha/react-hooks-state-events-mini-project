import React from "react";
import Task from "./Task";


function TaskList({ tasks,onDeleteTask }) {
  console.log(tasks)
  return (
    <div className="tasks">
     {tasks.map((task) => (
        <Task key={task.text} 
        onDelete={onDeleteTask}
        text={task.text} 
        category={task.category}/>
      ))}
    </div>
  );
}

export default TaskList;




