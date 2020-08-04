/*
Al presionar el botón, pedir la clave.
*/

function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("Ingrese su clave:"); // Se pide la clave por prompt.
	
	while(claveIngresada != "utn750") // Mientras que la clave ingresada NO sea igual a "utn750"...
	{
		claveIngresada = prompt("Error. Ingrese nuevamente su clave:"); // ...el usuario recibirá un cartel de error pidiendo que ingrese la clave nuevamente.
	}

alert("Clave correcta."); // Si el usuario ingresa la clave correcta, saldrá del loop y se mostrará este alert.
}