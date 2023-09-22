document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";

            const deleteButton = listItem.querySelector(".delete");
            deleteButton.addEventListener("click", () => {
                taskList.removeChild(listItem);
            });
        }
    });
});
