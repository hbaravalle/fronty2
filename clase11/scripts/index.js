const registerBtn = document.querySelector(".register-btn");
const passwordInput = document.querySelector("#password-input");
const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", function() {
  if(passwordInput.getAttribute("type") == "password") {
    passwordInput.setAttribute("type", "text")
  } else {
    passwordInput.setAttribute("type", "password")
  }
})

registerBtn.addEventListener("click", () => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  let emailValue = document.getElementById("email-input").value;

  // 2. Obtenemos los datos ingresados en el input de password
  let passwordValue = passwordInput.value;

  // 3. Obtenemos el valor del input radio
  let inputsMayorDeEdad = document.querySelectorAll("input[name='legalAge']");
  let valueMayorDeEdad;

  inputsMayorDeEdad.forEach(function(elemento) {
    if(elemento.checked) {
      valueMayorDeEdad = elemento.value
    }
  })

  let tycValue = document.querySelector("#tyc-input").checked;
  console.log(tycValue)

  // 4. Obtenemos el valor del input checkbox
  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.

  let selectPaises = document.querySelector("#paises");
  let opcionPaisSeleccionada = selectPaises.options.selectedIndex;
  let valuePais = selectPaises.options[selectPaises.options.selectedIndex].value;
  
  console.log(valuePais)

});
