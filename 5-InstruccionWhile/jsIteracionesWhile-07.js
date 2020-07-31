/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
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
	txtIdPromedio.value = promedio;
}