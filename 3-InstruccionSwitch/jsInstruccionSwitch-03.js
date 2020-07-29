/*
Al seleccionar un mes informar:
Si es febrero: "Este mes no tiene más de 29 días."
Si no es febrero: "Este mes tiene 30 o más días."
*/

function mostrar()
{
	var mes;
	mes = txtIdMes.value; // O sino: document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 o más días.");
	}
}