/*
Al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/

function mostrar()
{
    for(let contador = 0; contador < 5; contador++){
        console.log(contador); // La consola mostrará hasta el número 3 por el IF de abajo.
        if (contador == 3){ // Si el contador es igual a 3, entra y...
            break; //... ejecuta el break.
        }
    }
}

/* El break sirve para cuando quiero terminar de manera anticipada un loop. */