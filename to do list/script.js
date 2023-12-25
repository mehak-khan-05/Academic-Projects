const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("add");
const taskList = document.getElementById("tasklist");

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

taskList.addEventListener("click", deleteTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<span>${taskText}</span><button>Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentNode.remove();
    }
}