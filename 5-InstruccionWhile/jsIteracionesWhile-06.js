/* 
Al presionar el botón, pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar() {

	// Mi ejercicio:

	/* Declaración de variables. */

	var numeroIngresado;
	var sumaAcumulada;
	var promedio;
	var contador = 0; // Inicializo el contador que sumará constantes en 0.
	var acumulador = 0; // Inicializo el acumulador que sumará variables en 0.

	while (contador < 5) { // Mientras que el contador sea menor a 5... --->
		numeroIngresado = prompt("Ingrese un número:"); // ...se le pedirá al usuario que ingrese un número.
		numeroIngresado = parseInt(numeroIngresado);
		while (isNaN(numeroIngresado)) // Mientras que el número ingresado no sea un número...
		{
			numeroIngresado = prompt("Error, debe ingresar únicamente valores numéricos."); // ...el usuario recibirá un mensaje de error.
			numeroIngresado = parseInt(numeroIngresado);
			// El loop continuará hasta que el usuario ingrese números.
		}

		acumulador = acumulador + numeroIngresado; // ---> ...el acumulador será igual a la suma de 0 + el número ingresado por el usuario.
		contador = contador + 1; // ---> ...el contador será igual a la suma de 0 + 1. Cuando el loop de la suma llegue a 5, saldrá de la estructura repetitiva.
	}

	promedio = acumulador / contador; // El promedio se obtiene dividiendo el acumulador (que sumó cinco números) por el contador (que contó un total de cinco entradas).
	suma = acumulador; // La suma se obtiene simplemente presentando la variable de acumulador, que fue guardando los valores obtenidos.

	txtIdSuma.value = "La suma es: " + acumulador; // Muestro la suma por ID.
	txtIdPromedio.value = "El promedio es: " + promedio; // Muestro el promedio por ID.
}

/* Ejercicio hecho por el profesor:

	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador = 0;
	acumulador = 0;

	while(contador < 5)
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado; // El acumulador siempre cuenta y acumula valores variables.
		contador = contador + 1; // Es lo mismo que contador++; // El contador siempre cuenta de 1 en 1, o de 2 en 2, dependiendo del número.
	}

	promedio = acumulador/5 // O sino promedio = acumulador/contador porque contador es 5 al estar dentro del while (se suma 0+1 cinco veces). // El promedio se calcula afuera porque no va dentro del bucle, no es necesario que se repita.

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
*/


/* Ejercicio hecho sin estructuras repetitivas (while):

{
	var numero1;
	var numero2;
	var numero3;
	var numero4;
	var numero5;
	var suma;
	var promedio;

	numero1 = parseInt(prompt("Ingrese un número: "));
	numero2 = parseInt(prompt("Ingrese un número: "));
	numero3 = parseInt(prompt("Ingrese un número: "));
	numero4 = parseInt(prompt("Ingrese un número: "));
	numero5 = parseInt(prompt("Ingrese un número: "));

	suma = numero1 + numero2 + numero3 + numero4 + numero5;
	promedio = suma / 5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
}
*/

/*
Al presionar el botón, pedir 5 números e informar la suma acumulada y el promedio.
*/

