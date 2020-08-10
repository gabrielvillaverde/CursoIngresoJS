/*
Al presionar el botón, pedir un número. Mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	/* Declaración de variables. */
	var numero;
	var cantidadNumerosPares = 0;

	/* Solicito el número al usuario. */
	numero = prompt("Ingrese un número");
	numero = parseInt(numero);

	/* Armo el loop con for. */
	for(var contador = 1 ; contador <= numero ; contador = contador + 1){
		if(contador % 2 == 0) // Con la fórmula X % 2 == 0 mostrará los números pares. Ya que si X % 2 da 0...
		{
			cantidadNumerosPares++; // ...se genera un contador de la CANTIDAD de números pares.
			console.log(contador); // ...y se muestra el valor de contador.
		}
	}

	/* Fuera del for muestro la cantidad de números pares. */
	console.log("La cantidad de números pares encontrados son: " + cantidadNumerosPares);
}