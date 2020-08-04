/*
Al presionar el botón, mostrar 10 repeticiones con números desde el 10 al 1.
*/

function mostrar()
{

	for(var contador = 10 ; contador > 0 ; contador-1)
	{
		document.write(contador);
		contador = contador - 1;
	}
}