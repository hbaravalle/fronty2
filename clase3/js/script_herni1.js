const MENSAJES = {
    bienvenida: "Bienvenido a este juego de alto vuelo: Piedra, papel o tijera",
    consigna: "Puedes elegir 'piedra', 'papel' o 'tijera'...",
    invalido: "Opción inválida 🚫",
    ganaste: "¡Has ganado! 😎.",
    empataste: "Esto es un empate.",
    perdiste: "Has perdido 🙃."
}

const OPCIONES = ["piedra", "papel", "tijera"]

let puntajeAcumulado = {
    jugador: 0,
    compu: 0
}

let nRandom = () => Math.floor(Math.random() * 3)
let seleccionUsuario = () => prompt(MENSAJES.consigna);
let seleccionCompu = () => OPCIONES[nRandom()];

let nuevoIntento = (valorUsuario, valorCompu) => {
    console.log(`${valorUsuario} vs. ${valorCompu}`)
    switch(valorUsuario.toLowerCase()) {
        case valorCompu:
            alert(MENSAJES.empataste);
            break;
        case 'piedra':
            if(valorCompu == 'tijera') {
                alert(MENSAJES.ganaste)
            } else {
                alert(MENSAJES.perdiste)
            }
            break;
        case 'papel':
            if(valorCompu == 'piedra') {
                alert(MENSAJES.ganaste)
            } else {
                alert(MENSAJES.perdiste)
            }
            break;
        case 'tijera':
            if(valorCompu == 'papel') {
                alert(MENSAJES.ganaste)
            } else {
                alert(MENSAJES.perdiste)
            }
            break;
        default:
            alert(MENSAJES.invalido)
    }
}

let jugar = () => {
    nuevoIntento(seleccionUsuario(), seleccionCompu())
    if(confirm("¿Quieres volver a internarlo?")) jugar()
    else alert("¡Nos vemos la próxima!")
}

jugar();