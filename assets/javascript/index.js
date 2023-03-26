function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  var newTask = document.createElement("li");
  var taskText = document.createTextNode(taskInput.value);
  
  newTask.appendChild(taskText);
  taskList.appendChild(newTask);
  taskInput.value = "";
  
  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "X";
  deleteBtn.className = "deleteBtn";
  deleteBtn.onclick = function() {
    newTask.remove();
  };
  
  newTask.appendChild(deleteBtn);
  newTask.onclick = function() {
    newTask.classList.toggle("completed");
  };
}