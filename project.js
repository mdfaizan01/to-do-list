let taskList = document.getElementById("taskList");

function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = input.value;

    li.onclick = function () {
        li.classList.toggle("completed");
    };

    let delBtn = document.createElement("span");
    delBtn.innerHTML = "❌";
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
    input.value = "";
}
