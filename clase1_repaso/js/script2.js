let unArray = [1, 2, 3, 4, 5, 6, 7];

// Prueba 2, forEach ===================================================
console.log("Prueba 2 =======");

let acumulador2 = 0;
unArray.forEach(function(elemento, indice) {
    if(indice != 0) {
        console.log(acumulador2 + elemento)
    }
    acumulador2 = acumulador2 + elemento
});