// @Paulina Sosa @Pato Hunt @Lu Murga @Cata.Forgione @wilmar @Gianna

let jugar = confirm( '¿Listo para el combate?' );

if( jugar ) {
    alert( 'A jugar!' );
} else {
    alert( 'Te lo perdiste, wachin' ); // ⭐
}

let numElegido = prompt( 'Introduzca un número: 1 si es piedra, 2 si es papel y 3 si es tijera. Sólo se permiten números enteros.' );
let ppt = Math.round( Math.random( ) * ( 3 - 1 ) + 1 ); // ⭐
let respuesta, opciones;

function rtaPosible( ) {
    // Numeración
    if( numElegido == 1 ) {
        opciones =  'Piedra';
    } else if( numElegido == 2 ) {
        opciones =  'Papel';
    } else {
        opciones = 'Tijera';
    }

    // Empate
    if( numElegido == ppt ) {
        respuesta = `Es un empate! La respuesta de la máquina fue ${ numElegido } = ${ opciones }`;
    }

    // Si es piedra
    if( numElegido == 1 ) {
        if( ppt == 2 ) {
            respuesta = `Perdiste :c La respuesta de la máquina fue ${ numElegido } = ${ opciones }`;
        } else if( ppt == 3 ) {
            respuesta = `Ganaste :D La respuesta de la máquina fue ${ numElegido } = ${ opciones }`;
        }
    }

    // Si es papel
    if( numElegido == 2 ) {
        if( ppt == 1 ) {
            respuesta = `Ganaste :D La respuesta de la máquina fue ${ numElegido } = ${ opciones }`;
        } else if( ppt == 3 ) {
            respuesta = `Perdiste :c La respuesta de la máquina fue ${ numElegido } = ${ opciones }`;
        }
    }

    // Si es tijera
    if( numElegido == 3 ) {
        if( ppt == 1 ) {
            respuesta = `Perdiste :c La respuesta de la máquina fue ${ numElegido } = ${ opciones }`;
        } else if( ppt == 2 ) {
            respuesta = `Ganaste :D La respuesta de la máquina fue ${ numElegido } = ${ opciones }`;
        }
    }
}

if( numElegido >= 1 && numElegido <= 3 ) {
    rtaPosible( );
} else {
    while( numElegido != 1 && numElegido != 2 && numElegido != 3 ) {
        numElegido = prompt( 'El valor ingresado es incorrecto. El número debe ser 1, 2 o 3' );
        if( numElegido >= 1 && numElegido <= 3 ) {
            rtaPosible( );
        }
    }
}

alert( respuesta );