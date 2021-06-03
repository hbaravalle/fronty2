let unArray = [1, 2, 3, 4, 5, 6, 7];

// Prueba 3, reduce ===================================================
console.log("Prueba 3 =======");

unArray.reduce(function(acumulador3, elemento) {
    console.log(acumulador3 + elemento)
    return acumulador3 + elemento
});