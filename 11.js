window.addEventListener("load", showTasks);
const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
let tasks;
if (!localStorage.getItem("todo")) {
  tasks = [];
} else {
  tasks = getTasks();
}

btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("write plan");
    return;
  }
  let text = input.value;
  let task = createTask(text);
  task.innerHTML += `<span class="closeBtn">
  <i class="fa-solid fa-trash"></i>
</span>`;

  ul.appendChild(task);
  saveTasks(text);
  input.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    e.target.parentElement.parentElement.style = "display : none";
  }
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  }
});

function createTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  return li;
}
function saveTasks(text) {
  tasks.push(text);
  localStorage.setItem("todo", tasks);
}
function getTasks() {
  return localStorage.getItem("todo").split(",");
}
function showTasks() {
  for (let taskText of getTasks()) {
    let task = createTask(taskText);
    task.innerHTML += `<span class="closeBtn">
  <i class="fa-solid fa-trash"></i>
</span>`;
    ul.appendChild(task);
  }
}
