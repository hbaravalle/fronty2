let datos = [
    "El 52% del tráfico de todo Internet es creado por Bots entre inofensivos y maliciosos",
    "Cada día se realizan aproximadamente 5.5 billones de búsquedas en Google",
    "Entre el 16% y el 20% de las búsquedas diarias que se realizan en Google son originales y no se han hecho antes",
    "Para una sola consulta, Google utiliza 1.000 ordenadores en 0,2 segundos para ofrecer un resultado.",
    "En el mundo existen 370,1 millones de dominios registrados",
    "La extensión de dominio más utilizada en el mundo es el .com con 148.7 millones"
];

let elListado = document.querySelector(".listado");

for(let dato of datos) {
    elListado.innerHTML += `
        <article>
            <p>${dato}</p>
            <a href="#"><i class="fas fa-link"></i> Link a la nota</a>
        </article>
    `
}

let elPrimerArticle = document.querySelector("article");
let todosLosArticles = document.querySelectorAll("article");

let buttonLeido = document.querySelector("#leidos");

buttonLeido.addEventListener("click", function() {
    todosLosArticles.forEach(function(elemento) {        
        elemento.classList.toggle("leido")
    })
})