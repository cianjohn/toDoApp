// import {Task} from "./class.js";


if (!localStorage.getItem("tasks")){
    localStorage.setItem("tasks", "{}")
    list = JSON.parse(localStorage.getItem("tasks"))
    list.identifyer = 0
    console.log(list)
    localStorage.setItem("tasks", JSON.stringify(list))
}



function store(){
    let name = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;
    let assigned = document.querySelector("#assignedName").value;
    let dueDate = document.querySelector("#dueBy").value;
    let status = document.querySelector("#status").value;
    let colour = document.querySelector("#colorInput").value;
    let id = JSON.parse(localStorage.getItem("tasks")).identifyer

    let task = new Task(id, name, description, assigned, dueDate, status, colour);
    console.log(task)
    let taskList = JSON.parse(localStorage.getItem("tasks"));
    console.log(taskList)
    taskList[id]=task;
    id++
    taskList.identifyer=id

    console.log(taskList)
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

// let



// getData()
function displayCard(object){
return `<div class="col-5 col-md-3 col-lg-2">
<div class="card shadow-sm">
<div class="card-header" style="background-color:${object.colour};">
  <h5>Task</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item"><h6>Assigned To:</h6><p>${object.assigned}</p></li>
  <li class="list-group-item"><h6>Assigned By:</h6><p>${object.name}</p></li>
  <li class="list-group-item"><h6>Due Date:</h6><p>${object.dueDate}</p></li>
  <li class="list-group-item"><h6>Status:</h6><p>${object.status}</p></li>
  <li class="list-group-item"><h6>Description:</h6><p>${object.description}</p></li>
</ul>
</div>
</div>`
}

let contentspace = document.querySelector("#tasks")
let content = JSON.parse(localStorage.getItem("tasks"))
for (let i = 0; i<content.identifyer;i++){
  contentspace.innerHTML += displayCard(content[i])
}