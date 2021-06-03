let unArray = [1, 2, 3, 4, 5, 6, 7];

// Prueba 1, for ===================================================
console.log("Prueba 1 =======");

let acumulador = 0;
for(let i = 0; i < unArray.length; i++) {
    console.log(acumulador + unArray[i])
    acumulador = acumulador + unArray[i]
};