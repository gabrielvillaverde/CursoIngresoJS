/*
Al presionar el botón, pedir un número. Informar si el número es primo o no.
*/

// Números primos: solamente divisibles por 1 y por ellos mismos. El 1 no es considerado número primo.

function mostrar() {
	/* Declaración de variables. */
	var numero;
	var cantidadDivisores = 0;

	/* Solicito el número al usuario. */
	numero = prompt("Ingrese un número");
	numero = parseInt(numero);

	/* Armo el loop con for. */
	for (var contador = 1; contador <= numero; contador++) {
		if (numero % contador == 0) // Condición para saber si en la variable "número" y en la variable "contador", el valor guardado en la variable "contador" era divisor exacto del valor guardado en la variable "número".
		// Si el valor que tengo en la variable contador divide al número ingresado y da 0, me mostrará los números divisores.
		{
			cantidadDivisores++; // ...se genera un contador de la CANTIDAD de números divisores.
		}
	}

	/* Fuera del for muestro si el número es primo o no. */
	if (cantidadDivisores == 2) { // Si la variable "cantidadDivisores" quedó en el número 2, significa que encontramos dos divisores y ese número es primo.
		console.log(numero + " es primo.");
	}
	else { // Sino, si el contador de divisores no es igual a 2, decimos que no es primo.
		console.log(numero + " no es primo.");
	}
}