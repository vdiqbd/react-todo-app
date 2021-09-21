import Button from "./Button";

const Tasks = () => {
  const clearTask = () => {
    const taskList = JSON.parse(localStorage.getItem("Tasks"));
    taskList.splice(0, taskList.length);
    localStorage.setItem("Tasks", JSON.stringify(taskList));

    document.getElementById("task-container").innerHTML = "";
    const noTask = document.createElement("h3");

    noTask.id = "no-task";
    noTask.style.margin = "2px";
    noTask.style.fontWeight = "400";
    noTask.innerText = "No Task to Display";
    document.getElementById("task-container").appendChild(noTask);
  };

  return (
    <div className="tasks">
      <h2 className="head">Tasks</h2>
      <div className="task-container" id="task-container">
        <h3 id="no-task" style={{ margin: "10px", fontWeight: "400" }}>
          No Task to Display
        </h3>
      </div>
      <Button title="Clear" className="clear-btn" clearTask={clearTask} />
    </div>
  );
};

export default Tasks;
