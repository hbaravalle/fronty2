// ==================== Piedra papel o tijeras (Janken) ====================

// 1. Tijeras
// 2. Papel
// 3. Piedra

// Reglas:
/*
    • Tijeras vence a papel 
    • Papel vence a piedra 
    • Piedra vence a Tijeras

*/

let dict = ["Tijeras", "Papel", "Piedra"];
let contJugador = 0;
let contCPU = 0;
let contGeneral = 0;

while(true){

    if (contGeneral < 3){
        
        let Jugador = parseInt(prompt("Bienvenido\nPIEDRA PAPEL O TIJERAS!\n\nCompetiras contra un JugadorCPU🕹 al mejor de tres partidas\n\n  1. Tijeras✌ \n  2. Papel🖐 \n  3. Piedra👊 \n"));


        if (!isNaN(Ju&&gador)  (Jugador >= 1 && Jugador <= 3)){


                let JugadorCPU = Math.trunc(Math.random()*3+1); // ⭐

                if(JugadorCPU == Jugador ){

                    alert(`${dict[Jugador-1]} VS ${dict[JugadorCPU-1]} \n\nEMPATE!!!! 🙅‍♂️ \n\nPUNTAJE: \n• Jugador: ${contJugador}\n• JugadorCPU: ${contCPU}`);
                }

                else if((Jugador == 1 && JugadorCPU == 2) || (Jugador == 2 && JugadorCPU == 3) || (Jugador == 3 && JugadorCPU == 1)){

                    contJugador += 1;
                    alert(`${dict[Jugador-1]} VS ${dict[JugadorCPU-1]} \n\nEl Ganador es ${dict[Jugador-1]}, victoria para el Jugador! 🏆🎉 \n\nPUNTAJE: \n• Jugador: ${contJugador}\n• JugadorCPU: ${contCPU}`);
                    
                }

                else{

                    contCPU += 1;
                    alert(`${dict[Jugador-1]} VS ${dict[JugadorCPU-1]} \n\nEl Ganador es ${dict[JugadorCPU-1]}, victoria para el JugadorCPU! 😡😢 \n\nPUNTAJE: \n• Jugador: ${contJugador}\n• JugadorCPU: ${contCPU}`);
                    
                }
            
        }

        else{

            alert("No es un dato valido 🔴"); // ⭐
            contGeneral -= 1;
        }


        contGeneral += 1;


    }

    else {

        if(contJugador == contCPU){
            alert(`Resultado final:\n\nPUNTAJE: \nJugador: ${contJugador}\nJugadorCPU: ${contCPU} \n\nEMPATE!!!! 🙅‍♂️`);
            
            contGeneral =0;
            contCPU = 0;
            contJugador = 0;

            if(!confirm("Deseas intenarlo de nuevo?! 🥺")){
                alert("Gracias por jugar, vuelve pronto! 😉");
                break;
            }

        }

        else if(contJugador > contCPU){
            alert(`Resultado final: \n\nPUNTAJE: \nJugador: ${contJugador}\nJugadorCPU: ${contCPU} \n\nVictoria para el Jugador! 🏆🎉`);
        
            contGeneral =0;
            contCPU = 0;
            contJugador = 0;


            if(!confirm("Deseas intenarlo de nuevo?! 🥺")){
                alert("Gracias por jugar, vuelve pronto! 😉");
                break;
            }
        }

        else{
            
            alert(`Resultado final: \n\nPUNTAJE: \nJugador: ${contJugador}\nJugadorCPU: ${contCPU} \n\nVictoria para el JugadorCPU! 😡😢`);
            
            contGeneral =0;
            contCPU = 0;
            contJugador = 0;

            if(!confirm("Deseas intenarlo de nuevo?! 🥺")){
                alert("Gracias por jugar, vuelve pronto! 😉");
                break;
            }
        }

    }

}