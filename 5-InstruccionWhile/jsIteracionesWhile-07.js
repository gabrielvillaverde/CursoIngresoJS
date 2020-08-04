/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.
*/
function mostrar()

{
	// Mi ejercicio:

	/* Declaración de variables. */

	var numeroIngresado;
	var sumaAcumulada;
	var promedio;
	var contador = 0; // Inicializo el contador que sumará constantes en 0.
	var acumulador = 0; // Inicializo el acumulador que sumará variables en 0.
	var respuesta = true; // El valor de la variable 'respuesta' será TRUE.

	while (respuesta == true) { // Mientras que la respuesta sea TRUE (es decir, mientras que el usuario quiera seguir ingresando números)...
		numeroIngresado = prompt("Ingrese un número:"); // ...se le pedirá al usuario que ingrese un número.
		numeroIngresado = parseInt(numeroIngresado);
		while (isNaN(numeroIngresado)) // Mientras que el número ingresado no sea un número...
		{
			numeroIngresado = prompt("Error, debe ingresar únicamente valores numéricos."); // ...el usuario recibirá un mensaje de error.
			numeroIngresado = parseInt(numeroIngresado);
			// El loop continuará hasta que el usuario ingrese números.
		}

		acumulador = acumulador + numeroIngresado; // ---> ...el acumulador será igual a la suma de 0 + el número ingresado por el usuario.
		contador = contador + 1; // ---> ...el contador será igual a la suma de 0 + 1. Cuando el loop de la suma sea frenado por una respuesta FALSE (es decir, que el usuario no quiera ingresar más números), saldrá de la estructura repetitiva.
	
		respuesta = confirm("¿Quiere ingresar otro número?") // Si la respuesta es TRUE, el loop se reinicia y sigue pidiendo números. Si es FALSE, sale del loop.
	}

	promedio = acumulador / contador; // El promedio se obtiene dividiendo el acumulador (que sumó de acuerdo a la cantidad de veces que el usuario ingresó números) por el contador (que contó entradas de acuerdo a la cantidad de veces que el usuario ingresó números).
	suma = acumulador; // La suma se obtiene simplemente presentando la variable de acumulador, que fue guardando los valores obtenidos.

	txtIdSuma.value = "La suma es: " + acumulador; // Muestro la suma por ID.
	txtIdPromedio.value = "El promedio es: " + promedio; // Muestro el promedio por ID.
}

/* Ejercicio hecho por el profesor:

	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador = 0;
	acumulador = 0;
	respuesta = true;
	var promedio;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado; // Otra opción es acumulador += numeroIngresado

		contador++; // Otra opción es contador = contador + 1; o contador =+ 1;

		respuesta = confirm("¿Desea ingresar otro número?");
	}

	promedio = acumulador/contador;
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio; */