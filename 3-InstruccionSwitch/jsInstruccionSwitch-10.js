/*
Una agencia de viajes nos pide informar si hacemos viajes a lugares según la estación del año en que estemos, informar si "se viaja" o "no se viaja" a ese lugar.

En invierno: solo Bariloche informa "se viaja", los demás destinos "no se viaja".

En verano: "se viaja" a Mar del Plata y Cataratas solamente.

En otoño: "se viaja" a todos los destinos.

En primavera: solo "no se viaja" a Bariloche.
*/

function mostrar()
{
	var estacion = txtIdEstacion.value;
	var destino = txtIdDestino.value;

	switch (estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					alert("Se viaja.");
				break;
				default:
					alert("No se viaja.");
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Mar del Plata":
				case "Cataratas":
					alert("Se viaja.");
				break;
				default:
					alert("No se viaja.");
			}
		break;
		case "Otoño":
			switch(destino)
			{
				case destino:
					alert("Se viaja.");
			}
		break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					alert("No se viaja.");
				break;
				default:
					alert("Se viaja.");
			}
	}
}