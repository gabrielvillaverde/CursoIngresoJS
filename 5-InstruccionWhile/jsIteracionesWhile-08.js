/*
Al presionar el botón, pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.
*/

function mostrar()
{
	// Declaración de variables

	var numero;
	var positivos = 0; // Inicializo el acumulador de números positivos en 0.
	var negativos = 1; // Inicializo el acumulador de números negativos en 1, porque si se multiplica por 0 siempre dará 0.
	var respuesta = true; // Declaro la variable respuesta como TRUE.
	var flag = false; // Declaración de bandera, al estar inicializada en false indica que la bandera está bajada.

	// Loop donde el usuario ingresa los números y le preguntamos si quiere ingresar otros (mientras que el usuario quiera, con do while).

	do // Hacer...
	{
		// Se piden los números dentro del bucle ya que no sabemos cuántos quiere ingresar.
		numero = prompt("Ingrese un número: "); // Se le pide al usuario que ingrese un número por prompt.
		numero = parseInt(numero); // Se parsea ese número para convertirlo de string a entero.
		while (isNaN(numero)) // Mientras que el número ingresado no sea un número...
		{
			numero = prompt("Error, debe ingresar únicamente valores numéricos."); // ...el usuario recibirá un mensaje de error.
			numero = parseInt(numero);
			// El loop continuará hasta que el usuario ingrese números.
		}

		// Analizar el signo de cada número dentro del bucle.
		// Asignar/acumular el número en el acumulador correspondiente dentro del bucle.

		if(numero >= 0) // Si el número ingresado es mayor o igual a 0...
		{
			// alert("Positivo"); // ...será positivo.
			/* Acumulador */ positivos = positivos + numero; // positivos += numero; // El acumulador de números positivos irá sumando los números ingresados por el usuario hasta que este se canse y la respuesta sea FALSE.
		}
		else // Sino, el número ingresado no es mayor o igual a 0, por lo tanto...
		{
			// alert("Negativo"); // ... será negativo.
			// ¿Qué pasa si el usuario ingresa sólo positivos y no ingresa negativos? Se mostraría el valor "1" en la multiplicación, entonces para eso se utiliza un flag que detecte si se ingresaron números negativos o no.
			flag = true; // Levanto la bandera, significa que SI se ingresaron números negativos.
			/* Acumulador */ negativos = negativos * numero; // negativos *= numero;
		}
		respuesta = confirm("¿Quiere ingresar otro número?"); // Se le pregunta al usuario si quiere seguir ingresando números por prompt.
	}
	while (respuesta == true); // Mientras que la respuesta sea TRUE, se repetirá el bucle del do.

	if(flag == false) // Si el valor de la bandera es FALSE, está igual que cuando inicialicé el programa (también en FALSE), es decir, no se ingresó ningún negativo.
	{
		negativos = 0; // ...entonces los números negativos serán iguales a 0. Si no utilizaba esta flag en el recuadro de multiplicación de negativos siempre daría 1.
	}

	// Se muestran los resultados fuera del bucle:

	document.getElementById("txtIdSuma").value = "La suma de los números positivos es: " + positivos;
	document.getElementById("txtIdProducto").value = "La multiplicación de los números negativos es: " + negativos;		
}


