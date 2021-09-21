import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect } from "react";

function App() {
  const tasks = [];

  const showTask = (value) => {
    const container = document.createElement("div");
    const check = document.createElement("input");
    const task = document.createElement("h3");
    const removeOne = document.createElement("div");
    const removeTwo = document.createElement("div");
    const remove = document.createElement("div");

    check.type = "checkbox";
    task.innerText = value;

    container.classList.add("c");
    remove.classList.add("remove");
    removeOne.classList.add("remove-one");
    removeTwo.classList.add("remove-two");

    container.appendChild(check);
    container.appendChild(task);
    container.appendChild(removeOne);
    container.appendChild(removeTwo);
    container.appendChild(remove);

    document.getElementById("input").value = "";
    document.getElementById("no-task").style.display = "none";
    document.getElementById("task-container").style.padding = "10px 0";
    document.getElementById("task-container").appendChild(container);

    check.addEventListener("click", () => {
      task.style.textDecoration = check.checked ? "line-through" : "none";
    });

    remove.addEventListener("click", () => {
      container.remove(container);
      const index = tasks.indexOf(task.innerText);
      tasks.splice(index, 1);
      localStorage.setItem("Tasks", JSON.stringify(tasks));
    });

    document.getElementById("task-container").addEventListener("click", () => {
      if (document.getElementById("task-container").children.length === 1) {
        document.getElementById("no-task").style.display = "block";
        document.getElementById("task-container").style.padding = "0";
      } else {
        document.getElementById("no-task").style.display = "none";
        document.getElementById("task-container").style.padding = "10px 0";
      }
    });
  };

  useEffect(() => {
    const taskList = JSON.parse(localStorage.getItem("Tasks"));
    if (taskList.length !== 0) {
      for (let i = 0; i < taskList.length; i++) {
        tasks[i] = taskList[i];
        showTask(taskList[i]);
      }
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddTask tasks={tasks} />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
