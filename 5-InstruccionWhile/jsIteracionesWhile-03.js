/*
Al presionar el botón, pedir la clave.
*/

function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("Ingrese su clave:");
	
	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Error. Ingrese nuevamente su clave:");
	}

alert("Clave correcta."); 
}

/* El alert se ejecutará luego de que se ejecute
la estructura repetitiva de while. Si el usuario no ingresa
la clave correcta el alert no se mostrará. */

