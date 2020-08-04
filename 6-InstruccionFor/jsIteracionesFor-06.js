/*
Al presionar el botón, pedir un número. Mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	var numero;
	var cantidadNumerosPares = 0;

	numero = prompt("Ingrese un número");
	numero = parseInt(numero);

	for(var contador = 0 ; contador < numero ; contador = contador + 1){
		if(contador % 2 == 0)
		{
			cantidadNumerosPares = cantidadNumerosPares + 1;
			document.write(contador);
		}
	}


}//FIN DE LA FUNCIÓN

/*A partir de ese nro iterar entre 1 y ese numero, iterar tantas veces como el usuario haya indicado.
Lograr un bucle que itere tantas veces q pida
2do paso es fijarme dentro de ese bucle que numero es par
adentro hago un if, pregunto cuantas veces itero, si es par lo cuento, sino no hago nada*/