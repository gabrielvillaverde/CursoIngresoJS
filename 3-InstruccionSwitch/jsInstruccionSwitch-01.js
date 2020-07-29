/*
Al seleccionar un mes informar:
Si es enero: "Que comiences bien el año"
Si es marzo: "A clases"
Si es julio: "Se vienen las vacaciones"
Si es diciembre: "Felices fiestas"
*/

function mostrar()
{
	var mes;
	mes = txtIdMes.value; // O sino: document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Enero":
			alert("Que comiences bien el año.");
			break;
		case "Marzo":
			alert("A clases.");
			break;
		case "Julio":
			alert("Se vienen las vacaciones.");
			break;
		case "Diciembre":
			alert("Felices fiestas.");
			break;
	}
}

/* Ejercicio hecho con if y else:
function mostrar()
{
	var mes;
	mes = txtIdMes.value; // O sino: document.getElementById("txtIdMes").value;
	
	if(mes == "Enero")
	{
		alert("Que comiences bien el año.");
	}
	else
	{
		if(mes == "Marzo")
		{
			alert("A clases.")
		}
		else
		{
			if(mes == "Julio")
			{
				alert("Se vienen las vacaciones.");
			}
			else
			{
				if(mes == "Diciembre")
				{
					alert("Felices fiestas.");
				}
			}
		}
	}
}
*/