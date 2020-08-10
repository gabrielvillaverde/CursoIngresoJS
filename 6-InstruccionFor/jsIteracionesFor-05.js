/*
Al presionar el botón, repetir el pedido de número hasta que ingresemos el 9.
*/

function mostrar()
{
    var numero;

    for(;;){
        numero = parseInt(prompt("Ingrese un número: "));
        if(numero == 9){// Si pone el número 9, ingresa al break y se va del bucle sin mostrar el mensaje del alert.
            break;
        }
        alert("Usted ingresó el número: " + numero); // Este alert mostrará todos números que no sean el 9.
    }

}