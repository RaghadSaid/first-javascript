let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");


let taskList = localStorage.getItem("items") ? localStorage.getItem("items").split(",") : [];


taskList.forEach((taskText) => {
  addTaskToPage(taskText);
});


add.onclick = () => {
  let taskText = input.value.trim(); // value without spacing
  if(taskText){

    taskList.push(taskText);
    localStorage.setItem("items", taskList.join(",")); //update for localStorage
    addTaskToPage(taskText); 
    input.value = ""; //empty input
  }
}

function addTaskToPage(taskText) {
  let task = document.createElement("div");
  task.classList.add("task");
  task.innerText = taskText;

  let del = document.createElement("span");
  del.classList.add("delete");
  del.innerText = "delete";
  del.style.marginLeft = "10px";

  del.onclick = () => {
    taskList = taskList.filter((task) => task !== taskText);
    localStorage.setItem("items", taskList.join(","));
    task.remove();
  };

  task.appendChild(del);
  tasks.appendChild(task);
}






