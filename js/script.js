// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()




if (!localStorage.getItem("tasks")){
    localStorage.setItem("tasks", "[]")
    console.log(localStorage.getItem("tasks"))
}
// getData()

function store(){
    let name = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;
    let assigned = document.querySelector("#assignedName").value;
    let dueDate = document.querySelector("#dueBy").value;
    let status = document.querySelector("#status").value;
    let colour = document.querySelector("#colorInput").value;
    
    let task = {"name": name,
                "description": description,
                "assigned": assigned,
                "dueDate": dueDate,
                "status": status,
                "colour": colour};
    let taskList = JSON.parse(localStorage.getItem("tasks"));
    taskList.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskList));

    // window.location.reload();
}