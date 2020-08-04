/*
Al presionar el botón, pedir la cantidad de veces que quiero repetir el mensaje: "Hola UTN FRA."
*/

function mostrar()
{
	var repeticiones = prompt("Ingrese el número de repeticiones");

	for (var i = repeticiones; i > 0; i--){
		alert("Hola UTN FRA.");
	}

}