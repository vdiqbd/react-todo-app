import Button from "./Button";

const AddTask = ({ tasks }) => {
  const addTask = () => {
    const container = document.createElement("div");
    const check = document.createElement("input");
    const task = document.createElement("h3");
    const removeOne = document.createElement("div");
    const removeTwo = document.createElement("div");
    const remove = document.createElement("div");

    check.type = "checkbox";
    task.innerText = document.getElementById("input").value;
    tasks.push(document.getElementById("input").value);
    localStorage.setItem("Tasks", JSON.stringify(tasks));

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

  return (
    <div className="add-task">
      <input type="text" placeholder="Create A New Task..." id="input" />
      <Button title="Add Task" className="add-task-btn" addTask={addTask} />
    </div>
  );
};

export default AddTask;
