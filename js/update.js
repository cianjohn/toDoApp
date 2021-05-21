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

class TaskManager {
    constructor(){
        this.tasks =  {identifyer: 0}
    }
    updateLocalStorage(){
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
    }
    updateFromLocalStorage(){
        this.tasks = JSON.parse(localStorage.getItem("tasks")) || {}
    }
    changeDateFormat(date){
        let arraydate = date.split("-")
        return `${arraydate[2]}/${arraydate[1]}/${arraydate[0]}`
    }
    storeFormData(){
        let name = document.querySelector("#name").value;
        let description = document.querySelector("#description").value;
        let assigned = document.querySelector("#assignedName").value;
        let dueDate = this.changeDateFormat(document.querySelector("#dueBy").value);
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
        this.displayAll() 
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
        html.innerHTML = card

        html.querySelector("#cardAssigned").innerText = object.assigned;
        html.querySelector("#cardName").innerText = object.name;
        html.querySelector("#cardDescription").innerText = object.description;
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
        let listItem = `
        <div class="row">
          <div class="col">
            <h6 id="nameSpace">task for </h6>
            <h6><small class="text-muted">${object.status}</small></h6>
          </div>
          <div class="col justify-self-end text-end text-muted"><h6>${object.dueDate}</h6></div>
        </div>`
        let html = document.createElement("li");
        html.classList += "list-group-item"
        html.id = `list${object.id}`
        html.innerHTML = listItem

        html.querySelector("#nameSpace").innerText += object.assigned;

        // html.querySelector(`#list${object.id}`).addEventListener("click", (e) => {function{})
        
        document.querySelector("#spaceForTaskList").appendChild(html)
    }
    populateOptions(optionslist){
        let list = optionslist.sort()
        let menu = document.querySelector("#searchchoice")
        menu.innerHTML=`<option selected value="all">All</option>`
        for (let name of list){
            let option = document.createElement("option")
            option.value = option.innerText = name
            menu.appendChild(option)
        }
        menu.addEventListener("change", (e) => {this.getSearchName()})
    }
    displayList(content){
        document.querySelector("#spaceForTaskList").innerHTML = ""
        for (let key in content){
            if (key != "identifyer"){
                this.renderTaskList(content[key])
            }
        }
    }
    getOptions(){
        let options = []
        for (let key in this.tasks){
            if ((!options.includes(this.tasks[key].assigned))&&(key != "identifyer")){
                options.push(this.tasks[key].assigned)
            }
        }
        this.populateOptions(options)
    }
    displayAll(){
        this.displayCards(this.tasks)
        this.displayList(this.tasks)
        this.getOptions()
    }
    getSearchName(){
        let choice = document.querySelector("#searchchoice").value
        if (choice == "all"){
            this.displayList(this.tasks)
        }
        else{
            let content={}
            for (let key in this.tasks){
                if (this.tasks[key].assigned == choice){
                    content[key] = this.tasks[key]
                }
            }
            this.displayList(content) 
        }
    }
}
class Validation {

}

let start = new TaskManager
start.updateFromLocalStorage()
start.displayAll()