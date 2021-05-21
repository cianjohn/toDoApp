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

class appManager {
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
        if (!date) {return date}
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
        document.getElementById("myform").reset()
    }
    deleteTask(id) {
        delete this.tasks[id]
        this.updateLocalStorage()
        this.displayAll() 
    }
    updateDueDate(id){
        let newdueDate = this.changeDateFormat(document.querySelector("#updateDueBy").value);
        this.tasks[id].dueDate = newdueDate
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
        let card = `<div class="card shadow-sm" style="margin-top: 1vh;">
                    <div class="card-header" style="background-color:${object.colour};">
                    <div class="row">
                    <div class="col"><h5>Task</h5></div>
                    <div class="col text-end"><button id="card${object.id}" type="button" class="btn btn-secondary">delete task</button></div>
                    </div>
                    
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                            <h6>Assigned To:</h6><p id="cardAssigned"></p>
                            </li>
                            <li class="list-group-item">
                            <h6>Description:</h6><p id="cardDescription"></p>
                            </li>
                            <li class="list-group-item">
                            <div class="row">
                                <div class="col">
                                    <h6>Due Date:</h6><p>${object.dueDate}</p>
                                </div>
                                <div class="col text-end">
                                <button id="updateDate${object.id}" type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#updateModal" style="font-size:1.3rem;"><i class="bi bi-pencil-square"></i></button>
                                </div>
                            </div>
                            </li>
                            <li class="list-group-item">
                            <div class="row">
                                <div class="col">
                                    <h6>Status:</h6><p >${object.status}</p>
                                </div>
                                <div class="col text-end">
                                <button id="updatestatus${object.id}" type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#updateModal" style="font-size:1.3rem;"><i class="bi bi-pencil-square"></i></button>
                                </div>
                            </div>
                            </li>
                            <li class="list-group-item">
                                <h6>Assigned By:</h6><p id="cardName"></p>
                            </li>
                        </ul>
                    </div>`;
        let html = document.createElement("div");
        html.classList += "col-10 col-sm-6 col-md-4 col-lg-3 col-xlg-2"
        html.innerHTML = card

        html.querySelector("#cardAssigned").innerText = object.assigned;
        html.querySelector("#cardName").innerText = object.name;
        html.querySelector("#cardDescription").innerText = object.description;
        html.querySelector(`#card${object.id}`).addEventListener("click", (e) => {this.deleteTask(object.id)})
        html.querySelector(`#updatestatus${object.id}`).addEventListener("click", (e) => {this.renderModelStatus(object.id)})
        html.querySelector(`#updateDate${object.id}`).addEventListener("click", (e) => {this.renderModelDate(object.id)})
        
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
    toggleDisplay(id) {
        let item = document.querySelector(`#listItem${id}`);
        let card = document.querySelector(`#listCard${id}`);
        if (item.style.display === "none") {
          item.style.display = "block";
          card.style.display = "none";
        } else {
            item.style.display = "none";
            card.style.display = "block";
        }
    }
    renderTaskList(object){
        let listItem = `
        <div data-toggle="tooltip" title="show more" class="row" id="listItem${object.id}">
          <div class="col">
            <h6 id="nameSpace">task for </h6>
            <h6><small class="text-muted">${object.status}</small></h6>
          </div>
          <div class="col justify-self-end text-end text-muted"><h6>${object.dueDate}</h6></div>
        </div>
        <div data-toggle="tooltip" title="show less" class="row" id="listCard${object.id}" style="display:none;">
        <div class="col">
            <div class="card">
            <div  class="card-header">
                <h5 id="assignment">Task For </h5>
            </div>
            <ul class="list-group list-group-flush">
                <li id="cardDescription" class="list-group-item">Task:</li>
                <li class="list-group-item">${object.status};${object.dueDate}</li>
                <li id="creator" class="list-group-item">Assigned by </li>
            </ul>
        </div>
        </div>`
        let html = document.createElement("li");
        html.classList += "list-group-item"
        html.id = `list${object.id}`
        html.innerHTML = listItem

        html.querySelector("#nameSpace").innerText += object.assigned;
        html.querySelector("#cardDescription").innerText += object.description
        html.querySelector("#assignment").innerText += object.assigned
        html.querySelector("#creator").innerText += object.name

        html.addEventListener("click", (e) => {this.toggleDisplay(object.id)})
        
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
        this.sortByStatus()
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
    sortByStatus(){
        let choice = document.querySelector("#sortByStatus").value
        if (choice == "all"){
            this.displayCards(this.tasks)
        }
        else{
            let content={}
            for (let key in this.tasks){
                if (this.tasks[key].status == choice){
                    content[key] = this.tasks[key]
                }
            }
            this.displayCards(content) 
        }
    }
    renderModelDate(id){
        let contentspace = document.querySelector("#modelFormContent")
        let form = `
        <form id="updateDateForm" class="needs-validation" novalidate>
            <div class="mb-3">
            <label for="updateDueBy">Due:</label><br>
            <input required pattern="^[0-9/]{10}$" type="date" id="updateDueBy" name="dueDate" class="form-control">
            <div class="invalid-feedback">
                nope
            </div>
        </div>
        </form>
        `
        contentspace.innerHTML =form
        let savebtn = document.querySelector("#modelSaveBtn")
        savebtn.addEventListener("click", (e) =>{
            this.updateDueDate(id)
        }, {once : true});
    }
    renderModelStatus(id){
        let contentspace = document.querySelector("#modelFormContent")
        let form = `
        <form id="updateStatusForm" class="needs-validation" novalidate>
            <div class="mb-3">
                <label for="updateStatusSelect">Status:</label><br>
                <select name="status" id="updateStatusSelect" class="form-select">
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Review">Review</option>
                    <option value="Done">Done</option>
                </select>
            </div>
        </form>
        `
        contentspace.innerHTML =form
        let savebtn = document.querySelector("#modelSaveBtn")
        savebtn.addEventListener("click", (e) =>{
            this.updateStatus(id)
        }, {once : true});
    }
}
class Validation {

}

let start = new appManager
start.updateFromLocalStorage()
start.displayAll()