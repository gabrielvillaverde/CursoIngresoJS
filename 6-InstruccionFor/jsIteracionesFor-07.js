/*
Al presionar el botón, pedir un número. Mostrar los números divisores desde el 1 al número ingresado, y mostrar la cantidad de números divisores encontrados.
*/

function mostrar()
{
/* Declaración de variables. */
var numero;
var cantidadDivisores = 0;

/* Solicito el número al usuario. */
numero = prompt("Ingrese un número");
numero = parseInt(numero);

/* Armo el loop con for. */
for(var contador = 1 ; contador <= numero ; contador = contador + 1){
    if(numero % contador == 0) // Debo conocer todos los números que son divisores del número ingresado por el usuario. 
    // Si el valor que tengo en la variable contador divide al número ingresado y da 0, me mostrará los números divisores.
    {
        cantidadDivisores++; // ...se genera un contador de la CANTIDAD de números divisores.
        console.log(contador); // ...y se muestra el valor de contador.
    }
}

/* Fuera del for muestro la cantidad de números divisores. */
console.log("La cantidad de números divisores encontrados son: " + cantidadDivisores);
}