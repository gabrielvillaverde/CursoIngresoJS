/*
Al seleccionar un mes informar:
Si tiene 28 días.
Si tiene 30 días.
Si tiene 31 días.
*/

function mostrar()
{
	var mes;
	mes = txtIdMes.value; // O sino: document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Febrero":
			alert("Tiene 28 días.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 días.");
			break;
		default:
			alert("Tiene 31 días.")
	}
}