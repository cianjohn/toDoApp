// import {Task} from "./class.js";

if (!localStorage.getItem("tasks")){
    localStorage.setItem("tasks", "{}")
    let list = JSON.parse(localStorage.getItem("tasks"))
    list.identifyer = 0
    localStorage.setItem("tasks", JSON.stringify(list))
} else {displayAll()}

function store(){
    let name = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;
    let assigned = document.querySelector("#assignedName").value;
    let dueDate = document.querySelector("#dueBy").value;
    let status = document.querySelector("#status").value;
    let colour = document.querySelector("#colorInput").value;
    let taskList = JSON.parse(localStorage.getItem("tasks"));
    let id = taskList.identifyer

    let task = new Task(id, name, description, assigned, dueDate, status, colour);
    taskList[id]=task;
    id++
    taskList.identifyer=id
    localStorage.setItem("tasks", JSON.stringify(taskList));
    displayAll()
}

function remove(id) {
  let taskList = JSON.parse(localStorage.getItem("tasks"));
  delete taskList[id]
  localStorage.setItem("tasks", JSON.stringify(taskList));
  displayAll() 
}

function displayCard(object){
  let card = `<div class="card shadow-sm">
  <div class="card-header" style="background-color:${object.colour};">
    <h5>Task</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><h6>Assigned To:</h6><p id="cardAssigned"></p></li>
    <li class="list-group-item"><h6>Assigned By:</h6><p id="cardName"></p></li>
    <li class="list-group-item"><h6>Due Date:</h6><p>${object.dueDate}</p></li>
    <li class="list-group-item"><h6>Status:</h6><p >${object.status}</p></li>
    <li class="list-group-item"><h6>Description:</h6><p id="cardDescription"></p></li>
    <li class="list-group-item"><button onclick="remove(${object.id})" type="button" class="btn btn-primary">delete task</button></li>
    </ul>
  </div>
  `;
  const html = document.createElement("div");
  html.classList += "col-5 col-md-3 col-lg-2"
  html.id = object.identifyer
  html.innerHTML = card
  console.log(html)
  // need to fix
  html.querySelector("#cardAssigned").innertext = "hi";
  html.querySelector("#cardName").innertext = object.name;
  html.querySelector("#cardDescription").innertext = object.description;
  return html
}

function displaytasklist(object) {
  let item = `<li class="list-group-item">An item
  <div class="card" hidden>
<div class="card-header">
  Featured
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
</div>`
}

function displayAll(){
  let location = document.querySelector("#tasks")
  let content = JSON.parse(localStorage.getItem("tasks"))
  location.innerHTML = ""
  for (let key in content){
    // console.log(key)
    if (key !== "identifyer"){
      location.appendChild(displayCard(content[key]))
  }
}
}

function updateStatus(id){
  let newStatus = document.querySelector("#updateStatusSelect").value 
  let taskList = JSON.parse(localStorage.getItem("tasks"));
  taskList[id].status = newStatus
  localStorage.setItem("tasks", JSON.stringify(taskList));
  displayAll() 
}


// let listTaskSpace = document.querySelector("#spaceForTaskList")







// delete function or arrays to help others
// function remove(index){
//   tasks = JSON.parse(localStorage.getItem("tasks"))
//   tasks.splice(index, 1)
//   localStorage.setItem("tasks", Json.stringify(tasks))
// }
// go into local Storage
// get list
// list.splice(index,1)
// put list back in local Storage