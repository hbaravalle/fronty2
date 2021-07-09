const API_KEY = "E6kyNX9XgJbGK5WiDf2EVZ2c3SI98x3r";
const RATING = "pg-13"

let formulario = document.querySelector("form");
let inputSearch = document.querySelector("#search");

formulario.addEventListener("submit", e => e.preventDefault())
inputSearch.addEventListener("keypress", function() {

    document.querySelector("main").innerHTML = "";
    
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${inputSearch.value}&rating=${RATING}`)
        .then(function(response) {
            return response.json()
        })
        .then(function(listadoGifs) {
            listadoGifs.data.forEach(function(gif) {
                let urlGif = gif.images.downsized_large.url;
                document.querySelector("main").innerHTML += `<img src="${urlGif}">`
            })
        })
})
