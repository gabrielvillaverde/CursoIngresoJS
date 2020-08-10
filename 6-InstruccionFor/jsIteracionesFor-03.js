/*
Al presionar el botón, pedir la cantidad de veces que quiero repetir el mensaje: "Hola UTN FRA."
*/

function mostrar()


{
	var repeticiones;
	repeticiones = parseInt(prompt("Ingrese repeticiones:"));

	for (var i = 0; i < repeticiones; i++){
		alert(i + "Hola UTN FRA."); // Muestro la cantidad de iteraciones que se dieron y el mensaje "Hola UTN FRA"
	}

}