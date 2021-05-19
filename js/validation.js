// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelector('.needs-validation')
    // console.log(forms)
  
    // Loop over them and prevent submission
    let x = Array.prototype.slice.call(forms)
    // console.log(x)
    x.forEach(function (form) {
        // console.log(form)
        form.addEventListener('input', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            // if (form.validity.valueMissing){
            //     form.setCustomValidity("come on dude actually write something")
            // }
            // if (form.validity.patternMismatch){
            //     console.log("hi");
            //   form.setCustomValidity("naa dude gotta be between 1 and 20 characters");
              
            //   event.preventDefault();
            //   event.stopPropagation();
            // //   form.reportValidity();
            // }
          }

  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  



// let nameInput = document.querySelector("#name")
// let descriptionInput = document.querySelector("#description")
// let assignedInput = document.querySelector("#assignedName")
// let dueInput = document.querySelector("#dueBy")
// let statusInput = document.querySelector("#status")
// let colourInput = document.querySelector("#colorInput")


// function log(){
//     // console.log("ca#hange huvberyag adufva")
// }
// nameInput.addEventListener("input", log)
// descriptionInput.addEventListener("input", log)
// assignedInput.addEventListener("input", log)
// dueInput.addEventListener("input", log)
// statusInput.addEventListener("input", log)
// colourInput.addEventListener("input", log)

// [a-zA-Z]{1,20}  is a word of letters or capitals between 1 and 20 characters long


