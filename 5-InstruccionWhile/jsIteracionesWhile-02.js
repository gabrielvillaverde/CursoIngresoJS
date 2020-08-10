/*
Al presionar el botón mostrar 10 repeticiones con números descendentes, desde el 10 al 1.
*/

function mostrar()
{
	var contador = 10; // Declaro variable contador y la inicializo en 10.
	
	while(contador > 0) // Mientras que el contador sea mayor a 0...
	{
		alert(contador); // Si se coloca debajo de la línea de abajo empezará a contar desde 9 y no desde 10.
		// Otra opción es document.write(contador);
		contador = contador - 1;
	}
}