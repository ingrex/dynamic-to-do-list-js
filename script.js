document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

  // === Function required by ALX ===
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task");
      return;
    }

    // Create <li>
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Remove task on click
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
  }

  // === Event listeners required by ALX ===
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
