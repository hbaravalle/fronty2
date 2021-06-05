let unArray = [1, 2, 3, 4, 5, 6, 7];

// Prueba 4, for...of ===================================================

let acumulador4 = 0;

for(let elemento of unArray) {
    console.log(elemento + acumulador4)
    acumulador4 = acumulador4 + elemento
}