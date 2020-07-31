/*
Al presionar el botón, pedir un número
entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("Ingrese un número entre 0 y 9: ");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("Error, debe ingresar un número entre 0 y 9: ");
		numeroIngresado = parseInt(numeroIngresado);
	}

	txtIdNumero.value = numeroIngresado; // Termino mostrando por ID el número ingresado.
}