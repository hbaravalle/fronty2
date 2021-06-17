let listaDeImagenes = document.querySelectorAll("img");

listaDeImagenes.forEach(function(imagen) {
    let url = prompt("Inserta la URL de una imagen");
    imagen.setAttribute("src", url)
})