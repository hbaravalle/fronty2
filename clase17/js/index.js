fetch("https://restcountries.eu/rest/v2/all")
.then(function(response) {
    return response.json()
})
.then(function(arrayDePaises) {
    console.log(arrayDePaises)

    let listadoPaises = document.querySelector("#listadoPaises");
    
    arrayDePaises.forEach(function(pais) {
        listadoPaises.innerHTML += `<option value="${pais.alpha2Code}">${pais.name}</option>`
    })
})

fetch("https://dog.ceo/api/breeds/image/random")
.then(function(response) {
    return response.json()
})
.then(function(perritoRandom) {
    console.log(perritoRandom)
    document.body.innerHTML += `<img src="${perritoRandom.message}" />`
})