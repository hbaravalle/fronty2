// @Agus Pasqualis @Daniela Bilbao @Damian Sformo @Zoe Bussola @Carlos N.
// TIE ⭐

while(confirm("¿Listo para el combate?")) {
    let valorUsuario = prompt("Para comenzar el juego ingresá: piedra, papel o tijera :)").toUpperCase();

    let eleccion = ["PIEDRA", "PAPEL", "TIJERA"];

    while(!eleccion.includes(valorUsuario)) {
        valorUsuario = prompt("El valor ingresado es incorrecto. Para comenzar el juego ingresá: piedra, papel o tijera").toUpperCase();
    }

    let valorComputadora = Math.floor( Math.random() * 3 + 1 );

    if(eleccion[valorComputadora - 1] == valorUsuario) {
        alert("La computadora eligió: " + eleccion[valorComputadora - 1] + ". Empataste 🤔")
    }

    if(valorUsuario == "PIEDRA") { // Si elegiste piedra...
        if(valorComputadora == 2) {
            alert("La computadora eligió: " + eleccion[valorComputadora - 1] + ". Perdiste 🙃")
        }
        if(valorComputadora == 3){
            alert("La computadora eligi贸: " + eleccion[valorComputadora - 1] + ". Ganaste 🤩")
        }
    }

    if(valorUsuario == "PAPEL") { // Si elegiste papel...
        if(valorComputadora == 1) {
            alert("La computadora eligi贸: " + eleccion[valorComputadora - 1] + ". Ganaste 🤩")
        }
        if(valorComputadora == 3){
            alert("La computadora eligi贸: " + eleccion[valorComputadora - 1] + ". Perdiste 🙃")
        }
    }

    if(valorUsuario == "TIJERA") { // Si elegiste tijera...
        if(valorComputadora == 1) {
            alert("La computadora eligi贸: " + eleccion[valorComputadora - 1] + ". Perdiste 🙃")
        }
        if(valorComputadora == 2) {
            alert("La computadora eligi贸: " + eleccion[valorComputadora - 1] + ". Ganaste 🤩")
        }
    }
}