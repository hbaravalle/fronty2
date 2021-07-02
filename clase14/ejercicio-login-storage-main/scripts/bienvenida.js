let btnCerrarSesion = document.querySelector("#cerrarSesion");

btnCerrarSesion.addEventListener("click", function() {
    localStorage.removeItem("email");
    console.log("Buuuuuuuuuu! Te vamos a extrañar...")
    window.location.href = "index.html"
})