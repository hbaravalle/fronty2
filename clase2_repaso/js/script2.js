/* ---------------------------------
    Piedra, papel o tijera
--------------------------------- */

// @Laura Macias @Anto Manentti @Henry Salomón @Ana Belen Gonzalez @Angel Vargas :smiling_face_with_3_hearts:

let puntosUsuario = 0;
let puntosMaquina = 0;

let jugarPorPrimeraVez = confirm("¿Listo para jugar?");

empezarJuego(jugarPorPrimeraVez);

function jugar (eleccionUsuario, eleccionMaquina) {

    switch (eleccionUsuario.toUpperCase()) {
        case "PIEDRA":
            switch (eleccionMaquina) {
                case 1:
                    alert("Elegiste piedra. La máquina seleccionó piedra.\nEmpataron 🤔")
                break;
                case 2:
                    alert("Elegiste piedra. La máquina seleccionó papel.\nGana la máquina 😜")
                    puntosMaquina++
                break;
                case 3:
                    alert("Elegiste piedra. La máquina seleccionó tijera.\nGanaste!!! 😎")
                    puntosUsuario++
                break;
                }
        break;
                
        case "PAPEL":
            switch (eleccionMaquina) {
                case 1:
                    alert("Elegiste papel. La máquina seleccionó piedra.\nGanaste!!! 😎")
                    puntosUsuario++
                break;

                case 2:
                    alert("Elegiste papel. La máquina seleccionó papel.\nEmpataron 🤔")
                break;

                case 3:
                    alert("Elegiste papel. La máquina seleccionó tijera.\nGana la máquina 😜")
                    puntosMaquina++
                break;

                }
        break;
                
        case "TIJERA":
            switch (eleccionMaquina) {
                case 1:
                    alert("Elegiste tijera. La máquina seleccionó piedra.\nGana la máquina 😜")
                    puntosMaquina++
                break;

                case 2:
                    alert("Elegiste tijera. La máquina seleccionó papel.\nGanaste!!! 😎")
                    puntosUsuario++
                break;

                case 3:
                    alert("Elegiste tijera. La máquina seleccionó tijera.\nEmpataron 🤔")
                break;
            }
        break;
                        
        default:
            eleccionUsuario = alert("Ingrese una opción válida");
        break;
    }
    
    let volverAJugar = confirm("Tus puntos: "+ puntosUsuario +"\nPuntos máquina: "+ puntosMaquina +"\n¿Quiere jugar de nuevo??")
    empezarJuego(volverAJugar)

}

function empezarJuego(confirmacion) {
    if (confirmacion) {
        let eleccionUsuario = prompt ("Ingrese piedra, papel o tijera");
        let eleccionMaquina = parseInt(Math.random()*3+1);
        jugar(eleccionUsuario, eleccionMaquina)
    } else {
        alert("Esperamos verte pronto!")
    }
}

