/*
Al presionar el botón, pedir números hasta que el usuario quiera,
y mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar() {
	/* Declaración de variables */

	var numero;
	var maximo;
	var minimo;
	var respuesta = true;
	var flag = 0;

	/* Armo un bucle del tipo: mientras que el usuario quiera (do while) */

	do {
		/* [Dentro del bucle]: */

		/* Pido un número */
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);

		/* Debo reconocer si estoy pidiendo el número por primera vez. */
		if (flag == 0) {
			/* Si es así, inicializo máximo y mínimo */
			maximo = numero;
			minimo = numero;
			flag = 1;
		}

		/* Caso contrario, me fijo si tengo un nuevo máximo o un nuevo mínimo.
		Y los actualizo de ser necesario */
		if (numero > maximo) {
			maximo = numero;
		}
		else if (numero < minimo) {
			minimo = numero;
		}

		respuesta = confirm("¿Quiere ingresar otro número?");
	}

	while (respuesta == true);

	/* [Después del bucle] */

	/* Muestro la información de máximo y mínimo */

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}

/* Otra forma de hacer el do, más acotado: */

/* [Dentro del bucle]: */

/* 
numero = prompt("Ingrese un número");
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

/* Con el do while nos garantizamos que el código se ejecute aunque sea UNA vez. */
// Ejercicio que muestra FLAG, MAX, MIN y PROMEDIO con acumulador y contador.
/*
var numero;
var respuesta = true;
var maximo;
var minimo;
var primeraVez = true;
var contador = 0;
var acumulador;
var promedio;

do {
	do {
		numero = prompt("Ingrese un número correcto.:");
		numero = parseInt(numero);
	} while (isNaN(numero));

	if (primeraVez == true) { // Cuando es la primera vez, el único número que tenemos es el máximo y el mínimo.
		primeraVez = false; // Porque ya no quiero que ingrese más.
		maximo = numero;
		minimo = numero;
	}
	else { // Sino, comparo...
		if (numero > maximo) {
			maximo = numero;
		}

		if (numero < minimo) { // También puede ser else if.
			minimo = numero;
		}
	}

	acumulador += numero;
	contador = contador + 1;
	respuesta = confirm("¿Desea ingresar otro número?");
} while (respuesta); // O while(respuesta == true);

promedio = acumulador / contador;
txtIdMaximo.value = maximo;
txtIdMinimo.value = minimo;
console.log("El promedio es: " + promedio);
*/
