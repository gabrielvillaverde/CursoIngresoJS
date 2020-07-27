/*
Al seleccionar un mes informar:
Si estamos en invierno: "Abrigate que hace frio."
Si aún no llego el invierno: "Falta para el invierno."
Si ya paso el invierno: "Ya pasamos el frío, ahora calor."
Aclaración: tomamos a julio y agosto como los meses de invierno.
*/

function mostrar()
{
	var mes;
	mes = txtIdMes.value; // O sino: document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta poco para el invierno.");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frío.");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasó el invierno, ahora calor.");
	}
}