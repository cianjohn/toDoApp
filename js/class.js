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
    delete(){
        let taskList = JSON.parse(localStorage.getItem("tasks"));
        let index = taskList.findIndex(el => {return el.id ===String(this.id)})
        taskList.splice(index,1)
        localStorage.setItem("tasks", JSON.stringify(taskList));

    }
    updateStatus(status){
        this.status = status
    };
};
class TaskManager{    
    addTask(){
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
    }

}

// export {Task};