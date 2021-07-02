const formRegistro = document.querySelector("#formRegistro");
const passwordInput = document.querySelector("#password-input");
const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", function() {
  if(passwordInput.getAttribute("type") == "password") {
    passwordInput.setAttribute("type", "text")
  } else {
    passwordInput.setAttribute("type", "password")
  }
})

formRegistro.addEventListener("submit", (event) => {
  
  event.preventDefault();

  

});
