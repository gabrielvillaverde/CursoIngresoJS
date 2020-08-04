/*
Al presionar el botón, pedir un número entre 0 y 9 inclusive.
*/

function mostrar()
{
	var numeroIngresado; // Declaro la variable del número que el usuario quiera ingresar.
	numeroIngresado = prompt("Ingrese un número entre 0 y 9: "); // Pido el número por prompt.
	numeroIngresado = parseInt(numeroIngresado); // Lo parseo para convertirlo de string a entero.

	while(numeroIngresado < 0 || numeroIngresado > 9 || isNaN(numeroIngresado)) // Mientras que el número ingresado por el usuario sea menor a 0, o sea mayor a 9, o no sea un número...
	{
		numeroIngresado = prompt("Error, debe ingresar un número entre 0 y 9: "); // ...el usuario recibirá un mensaje de error.
		numeroIngresado = parseInt(numeroIngresado);
		// El loop continuará hasta que el usuario ingrese números que estén entre 0 y 9.
	}

	txtIdNumero.value = numeroIngresado; // Termino mostrando por ID el número ingresado.
}