export let alltasks = [];

export class todo {
  constructor(title, description, duedate, priority) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
  }
}

export function addTask() {
  let title = document.querySelector("#ttile").value;
  let description = document.querySelector("#textarea").value;
  let duedate = document.querySelector("#date").value;
  let priority = document.querySelector("#select").value;

  let newtask = new todo(title, description, duedate, priority);
  alltasks.push(newtask);
  display2(newtask);
}

let defaulttask = [
  new todo(
    "Complete Project Report",
    "Finish writing the final project report and review it for submission.",
    "20-04-2025",
    "High"
  ),
  new todo(
    "Grocery Shopping",
    "Buy vegetables, fruits, and other essentials for the week.",
    "25-01-25",
    "Medium"
  ),
  new todo(
    "Read a Book",
    "Read at least 2 chapters of the current novel.",
    "12-06-2025",
    "Low"
  ),
];
defaulttask.forEach((dtask) => {
  alltasks.push(dtask);
  display2(dtask);
});

export function display2(todo) {
  let container3 = document.querySelector("#container3");

  let tasks = document.createElement("div");
  tasks.classList.add("tasks");

  if (todo.priority.toLowerCase() === "high") {
    tasks.style.borderLeft = "5px solid red";
  } else if (todo.priority.toLowerCase() === "medium") {
    tasks.style.borderLeft = "5px solid orange";
  } else if (todo.priority.toLowerCase() === "low") {
    tasks.style.borderLeft = "5px solid green";
  }

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  let title = document.createElement("h3");
  title.textContent = todo.title;
  title.classList.add("task-title");

  let description = document.createElement("p");
  description.innerHTML = `<strong>Description:</strong> ${todo.description}`;

  let dueDate = document.createElement("p");
  dueDate.innerHTML = `<strong>Due Date:</strong> ${todo.duedate}`;

  let priority = document.createElement("p");
  priority.innerHTML = `<strong>Priority:</strong> ${todo.priority}`;

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      tasks.style.textDecoration = "line-through";
    } else {
      tasks.style.textDecoration = "";
    }
  });

  tasks.appendChild(checkbox);
  tasks.appendChild(title);
  tasks.appendChild(description);
  tasks.appendChild(dueDate);
  tasks.appendChild(priority);

  container3.appendChild(tasks);

  let deldiv = document.createElement("div");
  deldiv.classList.add("deldiv");

  let taskdel = document.createElement("button");
  taskdel.classList.add("taskdel");
  taskdel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
  </svg>`;

  taskdel.addEventListener("click", () => {
    const taskIndex = alltasks.indexOf(todo);
    if (taskIndex > -1) {
      alltasks.splice(taskIndex, 1);
    }
    container3.removeChild(tasks);
  });
  deldiv.appendChild(taskdel);
  tasks.appendChild(deldiv);
}

export function clean() {
  let title = document.querySelector("#ttile");
  let description = document.querySelector("#textarea");
  let duedate = document.querySelector("#date");
  let priority = document.querySelector("#select");

  title.value = "";
  description.value = "";
  duedate.value = "";
  priority.value = "";
}
