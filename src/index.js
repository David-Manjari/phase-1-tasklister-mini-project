document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  const newTask = document.getElementById("new-task-description")
  const taskToComplete = document.getElementById("tasks")

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const listTask = document.createElement('li')
    listTask.textContent = newTask.value;

    taskToComplete.appendChild(listTask);
    listTask.style.listStyle = "numbers"

    newTask.value = "";


  })

});
