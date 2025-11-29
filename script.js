let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");

let tasks = [];

// CREATE TASK
addBtn.addEventListener("click", () => {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let task = {
        id: Date.now(),
        name: taskText
    };

    tasks.push(task);
    taskInput.value = "";
    displayTasks();
});

// READ + DISPLAY TASKS
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        let li = document.createElement("li");
        li.className = "task";

        li.innerHTML = `
            <span>${task.name}</span>
            <div>
                <button class="edit" onclick="editTask(${task.id})">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

// UPDATE TASK
function editTask(id) {
    let newTask = prompt("Edit your task:");

    if (newTask !== null && newTask.trim() !== "") {
        tasks = tasks.map(task =>
            task.id === id ? { ...task, name: newTask } : task
        );
        displayTasks();
    }
}

// DELETE TASK
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}
