const addBtn = document.getElementById("add-btn");
const addBar = document.getElementById("add-bar");
const taskList = document.querySelector("ul");
const taskContainer = document.getElementById("task-container");

let li;

addBtn.addEventListener("click", () => {
  if (addBar.value.trim()) {
    li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `${addBar.value}
              <img src="Images/garbage.png" alt="" class="bin">`;
    taskList.appendChild(li);
    addBar.value = "";
    saveData();
  } else {
    alert("Cannot Be Empty");
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("bin")) {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.classList.contains("task")) {
    e.target.classList.toggle("checked");
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", taskList.innerHTML);
};

const showTasks = () => {
  taskList.innerHTML = localStorage.getItem("data");
};

showTasks();
