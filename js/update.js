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

class TaskManger {
    constructor(){
        this.tasks =  {identifyer: 0}
    }

    updateLocalStorage(){
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
    }
    updateFromLocalStorage(){
        this.tasks = JSON.parse(localStorage.getItem("tasks")) || {}
    }
    storeFormData(){
        let name = document.querySelector("#name").value;
        let description = document.querySelector("#description").value;
        let assigned = document.querySelector("#assignedName").value;
        let dueDate = document.querySelector("#dueBy").value;
        let status = document.querySelector("#status").value;
        let colour = document.querySelector("#colorInput").value;
        let id = this.tasks.identifyer

        let task = new Task(id, name, description, assigned, dueDate, status, colour)
        this.tasks[id] = task
        this.tasks.identifyer++

        this.updateLocalStorage()
        this.displayAll()
    }
    deleteTask(id) {
        delete this.tasks[id]
        this.updateLocalStorage()
        this.displayAll() 
    }
    updateStatus(id){
        let newStatus = document.querySelector("#updateStatusSelect").value 
        this.tasks[id].status = newStatus
        this.updateLocalStorage()
        displayAll() 
    }
    renderCard(object){
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
                        <li class="list-group-item"><button id="card${object.id}" type="button" class="btn btn-primary">delete task</button></li>
                        </ul>
                    </div>`;
        let html = document.createElement("div");
        html.classList += "col-5 col-md-3 col-lg-2"
        html.id = object.identifyer
        html.innerHTML = card

        html.querySelector("#cardAssigned").innertext = object.assigned;
        html.querySelector("#cardName").innertext = object.name;
        html.querySelector("#cardDescription").innertext = object.description;
        html.querySelector(`#card${object.id}`).addEventListener("click", (e) => {this.deleteTask(object.id)})
        
        document.querySelector("#tasks").appendChild(html)
    }
    displayCards(content){
        document.querySelector("#tasks").innerHTML = ""
        for (let key in content){
            if (key != "identifyer"){
                this.renderCard(content[key])
            }
        }
    }
    renderTaskList(object){

    }
    displayList(content){
        document.querySelector("#taskslist").innerHTML = ""
        for (let key in content){
            if (key != "identifyer"){
                this.renderTaskList(content[key])
            }
        }
    }
    displayAll(){
        this.displayCards(this.tasks)
        // this.displayList(this.tasks)
    }
    displaySearchName(){
        let choice = document.querySelector("#searchchoice").value
        if (choice = "all"){
            this.displayAll()
        }
        else{
            document.querySelector("#taskslist").innerHTML = ""
            for (let key in content){
                if (key != "identifyer"){
                    if (content[key].assigned == choice){
                        this.renderTaskList(content[key])
                    }
                }
            }
        }

    }
}


let start = new TaskManger
start.updateFromLocalStorage()
start.displayAll()