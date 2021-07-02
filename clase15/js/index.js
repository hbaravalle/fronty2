/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado - SIIIIIII

- implementar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

window.addEventListener("load", function() {
    let formulario = document.querySelector("form");
    let inputComentario = document.querySelector("#comentario");
    let cajaComentarios = document.querySelector(".comentarios");

    // Obtenemos lo que hay en localStorage en formato ARRAY...
    let loQueHayEnLocal = JSON.parse(localStorage.getItem("comentarios"));

    // Si no existe el item "comentarios" en localStorage, entonces crea el item y allí dentro un array vacio...
    if(loQueHayEnLocal == null) {
        loQueHayEnLocal = [];
    }

    loQueHayEnLocal.forEach(function(element) {
        cajaComentarios.innerHTML += `<p>${element}</p>`;
    })

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        // Al array de comentarios, le vamos a sumar lo nuevo que el usuario insertó...
        loQueHayEnLocal.push(inputComentario.value);

        // Ahora, con el array de comentarios ACTUALIZADO, vamos a volver a guardar esto en el item "comentarios" pero en formato JSON (texto)...
        localStorage.setItem("comentarios", JSON.stringify(loQueHayEnLocal));

        // Imprimimos en la div de comentarios un nuevo párrafo con el valor que ingreso el usuario...
        cajaComentarios.innerHTML += `<p>${inputComentario.value}</p>`;
        
        // Magia...
        formulario.reset();
    })
})