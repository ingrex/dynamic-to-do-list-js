// Run after the HTML is parsed (safe to access elements)
document.addEventListener("DOMContentLoaded", () => {
  // ---------- Element references ----------
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList  = document.getElementById("taskList");

  // ---------- Initial load from Local Storage ----------
  loadTasks();

  // ---------- Add via button ----------
  addButton.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (!text) return;
    addTask(text);            // add to UI + save to storage
    taskInput.value = "";     // clear input
    taskInput.focus();
  });

  // ---------- Add via Enter key ----------
  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addButton.click();
    }
  });

  // ---------- Helpers for Storage ----------
  function getTasks() {
    // Always returns an array (empty if key doesn’t exist)
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  }

  function saveTasks(arr) {
    localStorage.setItem("tasks", JSON.stringify(arr));
  }

  // ---------- Create one task in the UI ----------
  // save = false is used when loading from storage to avoid double-save
  function addTask(taskText, save = true) {
    // Build <li> structure
    const li   = document.createElement("li");
    const span = document.createElement("span");
    span.className = "text";
    span.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.type = "button";
    removeBtn.textContent = "Remove";

    // Assemble
    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save newly added task (only when user adds it)
    if (save) {
      const tasks = getTasks();
      tasks.push(taskText);
      saveTasks(tasks);
    }

    // Remove handler (UI + Storage)
    removeBtn.addEventListener("click", () => {
      taskList.removeChild(li);  // update UI
      removeOneFromStorage(taskText); // update storage
    });
  }

  // ---------- Load all tasks ----------
  function loadTasks() {
    const tasks = getTasks();
    tasks.forEach(text => addTask(text, false));
  }

  function removeOneFromStorage(taskText) {
    const tasks = getTasks();
    const idx = tasks.indexOf(taskText);
    if (idx > -1) {
      tasks.splice(idx, 1);
      saveTasks(tasks);
    }
  }
});
