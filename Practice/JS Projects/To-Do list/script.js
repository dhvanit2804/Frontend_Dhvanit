const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please Enter Task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("complete");
  });

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "❌";
  deletebtn.style.marginLeft = "10px";
  deletebtn.style.background = "transparent";
  deletebtn.style.border = "none";
  deletebtn.style.cursor = "pointer";

  deletebtn.addEventListener("click", (e) => {
    e.stopPropagation();
    taskList.removeChild(li);
  });

  li.appendChild(deletebtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
