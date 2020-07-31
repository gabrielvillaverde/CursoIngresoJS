/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	/* Declaración de variables */

	var numero;
	var positivos = 0;
	var negativos = 1;
	var respuesta;
	respuesta = true;
	var flag = 0;

	/* Bucle donde el usuario ingresa los números
	y le preguntamos si quiere ingresar otros (mientras
	que el usuario quiera, con do while) */

	do
	{
		/* Pedir los números dentro del bucle */
		numero = prompt("Ingrese un número: ");
		numero = parseInt(numero);

		/* Analizar el signo de cada número dentro del bucle */
		/* Acumular el número en el acumulador correspondiente
		dentro del bucle */

		if(numero >= 0)
		{
			// alert("Positivo");
			/* Acumulador */ positivos = positivos + numero; // positivos += numero;
		}
		else
		{
			// alert("Negativo");
			flag = 1;
			/* Acumulador */ negativos = negativos * numero; // negativos *= numero;
		}
		respuesta = confirm("¿Quiere ingresar otro número?");
	}
	while (respuesta == true);

	/* Mostrar resultados fuera del bucle */

	if(flag == 0)
	{
		negativos = 0;
	}

	document.getElementById("txtIdSuma").value = positivos;
	document.getElementById("txtIdProducto").value = negativos;		
}