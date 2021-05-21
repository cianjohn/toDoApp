
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelector('.needs-validation')

  
    // Loop over them and prevent submission
    let x = Array.prototype.slice.call(forms)
    x.forEach(function (form) {

        form.addEventListener('input', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

  
          form.classList.add('was-validated')
        }, false)
      })
  })()
