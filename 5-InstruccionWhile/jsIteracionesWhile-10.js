/*
Al presionar el botón, pedir números hasta que el usuario quiera, y mostrar:

1. Suma de los negativos.
2. Suma de los positivos.
3. Cantidad de positivos.
4. Cantidad de negativos.
5. Cantidad de ceros.
6. Cantidad de números pares.
7. Promedio de positivos.
8. Promedios de negativos.
9. Diferencia entre positivos y negativos, (positivos-negativos). 
*/

function mostrar()
{
	/* Declaración de variables. */

	var numeroIngresado;
	var respuesta = true;

	// Variables de positivos.

	var sumaPositivos = 0;
	var cantidadPositivos = 0;
	var promedioPositivos;

	// Variables de negativos.

	var sumaNegativos = 0;
	var cantidadNegativos = 0;
	var promedioNegativos;

	// Otras variables.

	var cantidadCeros;
	var cantidadPares;
	var diferenciaPositivosNegativos;

	/* Ciclo repetitivo: hasta que el usuario quiera. */

	do{ // Hacer...
		numeroIngresado = prompt("Ingrese un número:"); // ...se le pedirá al usuario que ingrese un número.
		numeroIngresado = parseInt(numeroIngresado);
		while (isNaN(numeroIngresado)) // Mientras que el número ingresado no sea un número...
		{
			numeroIngresado = prompt("Error, debe ingresar únicamente valores numéricos."); // ...el usuario recibirá un mensaje de error.
			numeroIngresado = parseInt(numeroIngresado);
			// El loop continuará hasta que el usuario ingrese números.
		}

		// 2. Suma de los positivos.
		if(numeroIngresado >= 0) // Si el número ingresado por el usuario es mayor o igual a 0, será positivo.
		{
		sumaPositivos = sumaPositivos + numeroIngresado; // El acumulador de números positivos va acumulando y sumando los números ingresados por el usuario.

		// 3. Cantidad de positivos.
		cantidadPositivos = cantidadPositivos + 1; // El contador de números positivos va sumando la cantidad de veces que se ingresan números positivos.
		}
		else
		{
			// 1. Suma de los negativos.
			sumaNegativos = sumaNegativos + numeroIngresado; // El acumulador de números negativos va acumulando y sumando los números ingresados por el usuario.

			// 4. Cantidad de negativos.
			cantidadNegativos = cantidadNegativos + 1; // El contador de números negativos va sumando la cantidad de veces que se ingresan números negativos.

		}


		respuesta = confirm("¿Quiere ingresar otro número?");
	}
	while(respuesta == true); // ...mientras que la respuesta sea TRUE.

	// 2. Suma de los positivos.
	document.write("La suma de los números positivos es: " + sumaPositivos);

	// 3. Cantidad de positivos.
	document.write("La cantidad de números positivos es: " + cantidadPositivos);

	// 1. Suma de los negativos.
	document.write("La suma de los números negativos es: " + sumaNegativos);

	// 4. Cantidad de negativos.
	document.write("La cantidad de los números negativos es: " + cantidadNegativos);





}



/*{
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	
	document.write("la suma de negativos es :"+sumaNegativos);
}*/