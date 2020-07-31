/*
Al presionar el botón, pedir números hasta que el usuario quiera,
y mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{	
	/* Declaración de variables */

	var numero;
	var maximo;
	var minimo;
	var seguir = true;
	var flag = 0;

	/* Armo un bucle del tipo: mientras que el usuario quiera (do while) */
	
	do
	{
		/* [Dentro del bucle]: */
		
		/* Pido un número */
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);

		/* Debo reconocer si estoy pidiendo el número por primera vez. */
		if(flag == 0)
		{
			/* Si es así, inicializo máximo y mínimo */
			maximo = numero;
			minimo = numero;
			flag = 1;
		}
		 
	   /* Caso contrario, me fijo si tengo un nuevo máximo o un nuevo mínimo.
	   Y los actualizo de ser necesario */ 
	   if(numero > maximo)
	   {
		   maximo = numero;
	   }
	   else if(numero < minimo)
	   {
		   minimo = numero;
	   }

		seguir = confirm("¿Quiere ingresar otro número?");
	}

	while (seguir == true);

	/* [Después del bucle] */

	/* Muestro la información de máximo y mínimo */

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}
	
	/* Otra forma de hacer el do, más acotado: */

	/* [Dentro del bucle]: */

	/* numero = prompt("Ingrese un número");
	numero = parseInt(numero);

	if (flag == 0 || numero > maximo)
	{
		maximo = numero;
	}
	if (flag == 0 || numero < minimo)
	{
		minimo = numero;
		flag = 1;
	}*/
