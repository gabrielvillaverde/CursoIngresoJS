/* Al presionar el botón pedir 5 números e informar
la suma acumulada y el promedio.
*/

function mostrar()
{
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
}

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

