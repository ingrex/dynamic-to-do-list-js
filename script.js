// 1. Wait for the HTML document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // 2. Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // 3. Define the addTask function
    function addTask() {
        const taskText = taskInput.value.trim(); // remove extra spaces

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new task item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";

        // ✅ Use classList.add instead of className
        removeBtn.classList.add("remove-btn");

        // Remove task on click
        removeBtn.addEventListener("click", function () {
            taskList.removeChild(li);
        });

        // Append button and li
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // 4. Attach event listeners
    // ✅ Button click listener
    addButton.addEventListener("click", addTask);

    // ✅ Enter key listener
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
