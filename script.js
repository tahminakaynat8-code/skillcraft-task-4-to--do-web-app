function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskDate = document.getElementById("taskDate");

    let taskText = taskInput.value;
    let dateText = taskDate.value;

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleComplete(this)">
            ${taskText} <br><small>${dateText}</small>
        </span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
    taskDate.value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
}

function editTask(btn) {
    let li = btn.parentElement;
    let text = li.querySelector("span").innerText;

    let newTask = prompt("Edit task:", text);
    if (newTask !== null) {
        li.querySelector("span").innerText = newTask;
    }
}

function toggleComplete(span) {
    span.classList.toggle("completed");
}