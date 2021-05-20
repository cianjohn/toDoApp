class Task {
    constructor(id, name, description, assigned, due, status, colour){
        this.id = id;
        this.name = name;
        this.assigned = assigned;
        this.description = description;
        this.dueDate = due;
        this.status = status;
        this.colour = colour;
    };
    
};

// export {Task};

// class TaskManager{
//     constructor(){
//         this.tasks = localStorage.getItem("tasks")
//         if (!localStorage.getItem("tasks")){
//             localStorage.setItem(JSON.stringify())
//             list = JSON.parse(localStorage.getItem("tasks"))
//             list.identifyer = 0
//             localStorage.setItem("tasks", JSON.stringify(list))
//         }else 
//         {this.tasks = localStorage.getItem("tasks")}
//     }
// }







// cant put method here cause local storage is weird
//     delete(){
//         let taskList = JSON.parse(localStorage.getItem("tasks"));
//         let index = taskList.findIndex(el => {return el.id ===String(this.id)})
//         taskList.splice(index,1)
//         localStorage.setItem("tasks", JSON.stringify(taskList));
// 




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

// class TaskManager{    
//     addTask(){
//         let name = document.querySelector("#name").value;
//         let description = document.querySelector("#description").value;
//         let assigned = document.querySelector("#assignedName").value;
//         let dueDate = document.querySelector("#dueBy").value;
//         let status = document.querySelector("#status").value;
//         let colour = document.querySelector("#colorInput").value;
        
//         let task = new Task(name, description, assigned, dueDate, status, colour);
//         let taskList = JSON.parse(localStorage.getItem("tasks"));
//         taskList.push(task);
//         localStorage.setItem("tasks", JSON.stringify(taskList));
//     }

// }

// 