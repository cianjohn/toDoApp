// import {Task} from "./class.js";


if (!localStorage.getItem("tasks")){
    localStorage.setItem("tasks", "[]")
}



function store(){
    let name = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;
    let assigned = document.querySelector("#assignedName").value;
    let dueDate = document.querySelector("#dueBy").value;
    let status = document.querySelector("#status").value;
    let colour = document.querySelector("#colorInput").value;
    
    let task = new Task(name, description, assigned, dueDate, status, colour);
    let taskList = JSON.parse(localStorage.getItem("tasks"));
    taskList.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskList));

    // window.location.reload();
}

// let



// getData()