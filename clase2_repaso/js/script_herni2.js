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

user = seleccionUsuario()
pc = seleccionCompu()
resultado = user + " vs " + pc;

let posibilidades = {
    'piedra vs papel': MENSAJES.perdiste,
    'piedra vs tijera': MENSAJES.ganaste,
    'papel vs piedra': MENSAJES.ganaste,
    'papel vs tijera': MENSAJES.perdiste,
    'tijera vs piedra': MENSAJES.perdiste,
    'tijera vs papel': MENSAJES.ganaste
}

(user === pc) ? MENSAJES.empataste : posibilidades[resultado]