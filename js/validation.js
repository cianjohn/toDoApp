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

let nameInput = document.querySelector("#name")
console.log(nameInput)
let descriptionInput = document.querySelector("#description")
let assignedInput = document.querySelector("#assignedName")
let dueInput = document.querySelector("#dueBy")
let statusInput = document.querySelector("#status")
let colourInput = document.querySelector("#colorInput")


function log(){console.log("ca#hange huvberyag adufva")}
nameInput.addEventListener("input", log)
descriptionInput.addEventListener("input", log)
assignedInput.addEventListener("input", log)
dueInput.addEventListener("input", log)
statusInput.addEventListener("input", log)
colourInput.addEventListener("input", log)