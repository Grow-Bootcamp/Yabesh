const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todolist");
const searchInput = document.getElementById("SearchInput");

let tasks = [];

// =========================
// ADD TASK
// =========================

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(task);

  displayTasks();

  taskInput.value = "";
  taskInput.focus();
});

// =========================
// DISPLAY TASKS
// =========================

function displayTasks(taskArray = tasks) {
  todoList.innerHTML = "";

  taskArray.forEach(function (task) {
    // Create list item
    const li = document.createElement("li");
    li.classList.add("todo-item");

    // =========================
    // CHECKBOX
    // =========================

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.id = "task-" + task.id;

    // When checkbox is clicked
    checkbox.addEventListener("change", function () {
      task.completed = checkbox.checked;

      displayTasks();
    });

    // =========================
    // TASK LABEL
    // =========================

    const label = document.createElement("label");

    label.htmlFor = checkbox.id;
    label.textContent = task.text;

    // =========================
    // EDIT BUTTON
    // =========================

    const editButton = document.createElement("button");

    editButton.type = "button";
    editButton.classList.add("edit-button");
    editButton.textContent = "✏️";

    editButton.setAttribute("aria-label", "Edit task");

    editButton.addEventListener("click", function () {
      editTask(task.id);
    });

    // =========================
    // DELETE BUTTON
    // =========================

    const deleteButton = document.createElement("button");

    deleteButton.type = "button";
    deleteButton.classList.add("delete-button");

    deleteButton.setAttribute("aria-label", "Delete task");

    deleteButton.addEventListener("click", function () {
      deleteTask(task.id);
    });

    // =========================
    // ADD ELEMENTS TO LI
    // =========================

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
  });
}

// =========================
// EDIT TASK
// =========================

function editTask(taskId) {
  const task = tasks.find(function (item) {
    return item.id === taskId;
  });

  if (!task) {
    return;
  }

  const newTaskText = prompt("Edit your task:", task.text);

  // User pressed Cancel
  if (newTaskText === null) {
    return;
  }

  const updatedText = newTaskText.trim();

  // Don't allow empty task
  if (updatedText === "") {
    alert("Task cannot be empty.");
    return;
  }

  // Update task
  task.text = updatedText;

  // Display updated task
  displayTasks();
}

// =========================
// DELETE TASK
// =========================

function deleteTask(taskId) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");

  if (!confirmDelete) {
    return;
  }

  tasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });

  displayTasks();
}

// =========================
// SEARCH TASKS
// =========================

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredTasks = tasks.filter(function (task) {
    return task.text.toLowerCase().includes(searchText);
  });

  displayTasks(filteredTasks);
});