/*

- Math.random para el número aleatorio
- Math.floor para redondear
- El usuario inserte un valor -> prompt
- Algo para comparar valores -> condicional
- Respuesta para el usuario -> alert o un confirm

++ Integrar esto en una funcion
- No vale patada ninja

*/

let jugar = alert("¿Listo para el combate?");

let valorUsuario = prompt("Elegí piedra(1), papel(2) o tijera(3). Por ahora, solo podes usar números :(")
let valorComputadora = Math.floor( Math.random() * 3 + 1 );

if(valorUsuario == 1) { // Si elegiste piedra...
    if(valorComputadora == 1) {
        alert("Empataste 🤔")
    }
    if(valorComputadora == 2) {
        alert("Perdiste 😥")
    }
    if(valorComputadora == 3){
        alert("Ganaste 😁")
    }
}

if(valorUsuario == 2) { // Si elegiste papel...
    if(valorComputadora == 1) {
        alert("Ganaste 😁")
    }
    if(valorComputadora == 2) {
        alert("Empataste 🤔")
    }
    if(valorComputadora == 3){
        alert("Perdiste 😥")
    }
}

if(valorUsuario == 3) { // Si elegiste tijera...
    if(valorComputadora == 1) {
        alert("Perdiste 😥")
    }
    if(valorComputadora == 2) {
        alert("Ganaste 😁")
    }
    if(valorComputadora == 3){
        alert("Empataste 🤔")
    }
}